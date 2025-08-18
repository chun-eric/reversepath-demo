import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Database interface
export interface User {
  id: string;
  email: string;
  name: string;
  password: string; // In real app, this would be hashed
  role: "PATIENT" | "RESEARCHER" | "ADMIN";
  createdAt: string;
  lastLogin?: string;
}

export interface AuditLog {
  id: string;
  userId?: string;
  action: string;
  resource: string;
  details?: any;
  timestamp: string;
  ipAddress?: string;
}

export interface ModuleProgress {
  id: string;
  userId: string;
  moduleId: string;
  completed: boolean;
  score?: number;
  completedAt?: string;
}

export interface XAPIStatement {
  id: string;
  userId: string;
  verb: string;
  object: string;
  result?: any;
  timestamp: string;
}

// Generic database operations
class JSONDatabase<T extends { id: string }> {
  private filename: string;

  constructor(tableName: string) {
    this.filename = path.join(DATA_DIR, `${tableName}.json`);
    this.ensureFileExists();
  }

  private ensureFileExists() {
    if (!fs.existsSync(this.filename)) {
      fs.writeFileSync(this.filename, JSON.stringify([]));
    }
  }

  private readData(): T[] {
    try {
      const data = fs.readFileSync(this.filename, "utf-8");
      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  private writeData(data: T[]) {
    fs.writeFileSync(this.filename, JSON.stringify(data, null, 2));
  }

  // Create
  create(item: Omit<T, "id">): T {
    const data = this.readData();
    const newItem = {
      ...item,
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    } as T;

    data.push(newItem);
    this.writeData(data);
    return newItem;
  }

  // Read all
  findMany(filter?: Partial<T>): T[] {
    const data = this.readData();

    if (!filter) return data;

    return data.filter((item) =>
      Object.entries(filter).every(
        ([key, value]) => item[key as keyof T] === value
      )
    );
  }

  // Read one
  findUnique(filter: Partial<T>): T | null {
    const items = this.findMany(filter);
    return items[0] || null;
  }

  // Update
  update(id: string, updates: Partial<T>): T | null {
    const data = this.readData();
    const index = data.findIndex((item) => item.id === id);

    if (index === -1) return null;

    data[index] = { ...data[index], ...updates };
    this.writeData(data);
    return data[index];
  }

  // Delete
  delete(id: string): boolean {
    const data = this.readData();
    const initialLength = data.length;
    const filtered = data.filter((item) => item.id !== id);

    if (filtered.length !== initialLength) {
      this.writeData(filtered);
      return true;
    }
    return false;
  }

  // Count
  count(filter?: Partial<T>): number {
    return this.findMany(filter).length;
  }
}

// Database instances
export const usersDB = new JSONDatabase<User>("users");
export const auditLogsDB = new JSONDatabase<AuditLog>("audit_logs");
export const moduleProgressDB = new JSONDatabase<ModuleProgress>(
  "module_progress"
);
export const xapiStatementsDB = new JSONDatabase<XAPIStatement>(
  "xapi_statements"
);

// Helper functions
export function createUser(userData: Omit<User, "id" | "createdAt">) {
  return usersDB.create({
    ...userData,
    createdAt: new Date().toISOString(),
  });
}

export function findUserByEmail(email: string) {
  return usersDB.findUnique({ email });
}

export function createAuditLog(logData: Omit<AuditLog, "id" | "timestamp">) {
  return auditLogsDB.create({
    ...logData,
    timestamp: new Date().toISOString(),
  });
}

export function getUserProgress(userId: string) {
  return moduleProgressDB.findMany({ userId });
}

export function updateModuleProgress(
  userId: string,
  moduleId: string,
  progress: Partial<ModuleProgress>
) {
  const existing = moduleProgressDB.findUnique({ userId, moduleId });

  if (existing) {
    return moduleProgressDB.update(existing.id, progress);
  } else {
    return moduleProgressDB.create({
      userId,
      moduleId,
      completed: false,
      ...progress,
    });
  }
}

// Initialize with demo data
export function initializeDemoData() {
  // Check if data already exists
  if (usersDB.count() > 0) return;

  // Create demo users
  const patient = createUser({
    email: "sarah.patient@demo.com",
    name: "Sarah Mitchell",
    password: "demo123", // In real app, hash this
    role: "PATIENT",
  });

  const researcher = createUser({
    email: "dr.researcher@demo.com",
    name: "Dr. Emily Research",
    password: "demo123",
    role: "RESEARCHER",
  });

  const admin = createUser({
    email: "admin@demo.com",
    name: "Admin User",
    password: "demo123",
    role: "ADMIN",
  });

  // Create demo audit logs
  createAuditLog({
    userId: patient.id,
    action: "login",
    resource: "authentication",
    details: { success: true },
  });

  createAuditLog({
    userId: patient.id,
    action: "view",
    resource: "education_dashboard",
    details: { duration: 300 },
  });

  createAuditLog({
    userId: patient.id,
    action: "complete",
    resource: "education_module_1",
    details: { score: 92, timeSpent: 900 },
  });

  // Create demo module progress
  updateModuleProgress(patient.id, "diabetes-remission-basics", {
    completed: true,
    score: 92,
    completedAt: new Date().toISOString(),
  });

  updateModuleProgress(patient.id, "low-energy-diet", {
    completed: true,
    score: 88,
    completedAt: new Date().toISOString(),
  });

  updateModuleProgress(patient.id, "monitoring-progress", {
    completed: false,
    score: undefined,
  });

  console.log("Demo data initialized!");
}

// Authentication helpers
export function validateUser(email: string, password: string): User | null {
  const user = findUserByEmail(email);
  if (user && user.password === password) {
    // Update last login
    usersDB.update(user.id, {
      lastLogin: new Date().toISOString(),
    });

    // Log login
    createAuditLog({
      userId: user.id,
      action: "login",
      resource: "authentication",
      details: { success: true },
    });

    return user;
  }

  // Log failed login attempt
  if (user) {
    createAuditLog({
      userId: user.id,
      action: "login_failed",
      resource: "authentication",
      details: { success: false, reason: "invalid_password" },
    });
  }

  return null;
}

// Analytics helpers
export function getDashboardAnalytics() {
  const totalUsers = usersDB.count();
  const patientsCount = usersDB.count({ role: "PATIENT" });
  const researchersCount = usersDB.count({ role: "RESEARCHER" });

  const recentAuditLogs = auditLogsDB
    .findMany()
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )
    .slice(0, 10);

  const loginCount = auditLogsDB.count({ action: "login" });
  const moduleCompletions = moduleProgressDB.count({ completed: true });

  return {
    totalUsers,
    patientsCount,
    researchersCount,
    recentAuditLogs,
    loginCount,
    moduleCompletions,
  };
}
