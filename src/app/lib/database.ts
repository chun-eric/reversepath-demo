// Complete Vercel-Compatible database.ts
// Replace your entire src/lib/database.ts with this code

import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

// Ensure data directory exists (for local development)
if (typeof window === "undefined") {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  } catch (error) {
    // Directory creation might fail on Vercel, that's OK
    console.log("Data directory creation skipped (likely Vercel environment)");
  }
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

// Hardcoded demo users that work on Vercel
const DEMO_USERS: User[] = [
  {
    id: "demo-patient-1",
    email: "sarah.patient@demo.com",
    name: "Sarah Mitchell",
    password: "demo123",
    role: "PATIENT",
    createdAt: "2025-08-18T10:00:00Z",
    lastLogin: "2025-08-18T14:30:00Z",
  },
  {
    id: "demo-researcher-1",
    email: "dr.researcher@demo.com",
    name: "Dr. Emily Research",
    password: "demo123",
    role: "RESEARCHER",
    createdAt: "2025-08-18T10:00:00Z",
    lastLogin: "2025-08-18T14:25:00Z",
  },
  {
    id: "demo-admin-1",
    email: "admin@demo.com",
    name: "Admin User",
    password: "demo123",
    role: "ADMIN",
    createdAt: "2025-08-18T10:00:00Z",
    lastLogin: "2025-08-18T14:20:00Z",
  },
];

// Hardcoded demo audit logs
const DEMO_AUDIT_LOGS: AuditLog[] = [
  {
    id: "audit-1",
    userId: "demo-patient-1",
    action: "login",
    resource: "authentication",
    details: { success: true },
    timestamp: "2025-08-18T14:30:00Z",
    ipAddress: "127.0.0.1",
  },
  {
    id: "audit-2",
    userId: "demo-patient-1",
    action: "view",
    resource: "education_dashboard",
    details: { duration: 300 },
    timestamp: "2025-08-18T14:31:00Z",
    ipAddress: "127.0.0.1",
  },
  {
    id: "audit-3",
    userId: "demo-patient-1",
    action: "complete",
    resource: "education_module_1",
    details: { score: 92, timeSpent: 900 },
    timestamp: "2025-08-18T14:25:00Z",
    ipAddress: "127.0.0.1",
  },
  {
    id: "audit-4",
    userId: "demo-researcher-1",
    action: "login",
    resource: "authentication",
    details: { success: true },
    timestamp: "2025-08-18T14:25:00Z",
    ipAddress: "127.0.0.1",
  },
  {
    id: "audit-5",
    userId: "demo-researcher-1",
    action: "view",
    resource: "admin_dashboard",
    details: { duration: 180 },
    timestamp: "2025-08-18T14:26:00Z",
    ipAddress: "127.0.0.1",
  },
  {
    id: "audit-6",
    userId: "demo-admin-1",
    action: "login",
    resource: "authentication",
    details: { success: true },
    timestamp: "2025-08-18T14:20:00Z",
    ipAddress: "127.0.0.1",
  },
];

// Hardcoded demo module progress
const DEMO_MODULE_PROGRESS: ModuleProgress[] = [
  {
    id: "progress-1",
    userId: "demo-patient-1",
    moduleId: "diabetes-remission-basics",
    completed: true,
    score: 92,
    completedAt: "2025-08-18T14:20:00Z",
  },
  {
    id: "progress-2",
    userId: "demo-patient-1",
    moduleId: "low-energy-diet",
    completed: true,
    score: 88,
    completedAt: "2025-08-18T14:22:00Z",
  },
  {
    id: "progress-3",
    userId: "demo-patient-1",
    moduleId: "monitoring-progress",
    completed: false,
    score: undefined,
    completedAt: undefined,
  },
];

// Generic database operations (for local development)
class JSONDatabase<T extends { id: string }> {
  private filename: string;

  constructor(tableName: string) {
    this.filename = path.join(DATA_DIR, `${tableName}.json`);
    this.ensureFileExists();
  }

  private ensureFileExists() {
    try {
      if (!fs.existsSync(this.filename)) {
        fs.writeFileSync(this.filename, JSON.stringify([]));
      }
    } catch (error) {
      // File operations might fail on Vercel
      console.log(`JSON database file creation skipped for ${this.filename}`);
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
    try {
      fs.writeFileSync(this.filename, JSON.stringify(data, null, 2));
    } catch (error) {
      // Write operations will fail on Vercel
      console.log(`JSON database write skipped (Vercel environment)`);
    }
  }

  // Create
  create(item: Omit<T, "id">): T {
    try {
      const data = this.readData();
      const newItem = {
        ...item,
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      } as T;

      data.push(newItem);
      this.writeData(data);
      return newItem;
    } catch (error) {
      // Return mock item if file operations fail
      return {
        ...item,
        id: `mock-${Date.now()}`,
      } as T;
    }
  }

  // Read all
  findMany(filter?: Partial<T>): T[] {
    try {
      const data = this.readData();

      if (!filter) return data;

      return data.filter((item) =>
        Object.entries(filter).every(
          ([key, value]) => item[key as keyof T] === value
        )
      );
    } catch (error) {
      return [];
    }
  }

  // Read one
  findUnique(filter: Partial<T>): T | null {
    try {
      const items = this.findMany(filter);
      return items[0] || null;
    } catch (error) {
      return null;
    }
  }

  // Update
  update(id: string, updates: Partial<T>): T | null {
    try {
      const data = this.readData();
      const index = data.findIndex((item) => item.id === id);

      if (index === -1) return null;

      data[index] = { ...data[index], ...updates };
      this.writeData(data);
      return data[index];
    } catch (error) {
      return null;
    }
  }

  // Delete
  delete(id: string): boolean {
    try {
      const data = this.readData();
      const initialLength = data.length;
      const filtered = data.filter((item) => item.id !== id);

      if (filtered.length !== initialLength) {
        this.writeData(filtered);
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  // Count
  count(filter?: Partial<T>): number {
    try {
      return this.findMany(filter).length;
    } catch (error) {
      return 0;
    }
  }
}

// Database instances (for local development)
export const usersDB = new JSONDatabase<User>("users");
export const auditLogsDB = new JSONDatabase<AuditLog>("audit_logs");
export const moduleProgressDB = new JSONDatabase<ModuleProgress>(
  "module_progress"
);
export const xapiStatementsDB = new JSONDatabase<XAPIStatement>(
  "xapi_statements"
);

// Helper functions that work on both Vercel and locally
export function createUser(userData: Omit<User, "id" | "createdAt">): User {
  // Try to save to file (works locally)
  try {
    return usersDB.create({
      ...userData,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    // File operations fail on Vercel, return mock user
    const newUser: User = {
      ...userData,
      id: `user-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    console.log("Created mock user:", newUser.email);
    return newUser;
  }
}

export function findUserByEmail(email: string): User | null {
  // Check hardcoded users first (works on Vercel)
  const demoUser = DEMO_USERS.find((u) => u.email === email);
  if (demoUser) {
    return demoUser;
  }

  // Fallback to file-based lookup (for local development)
  try {
    return usersDB.findUnique({ email });
  } catch (error) {
    return null;
  }
}

export function createAuditLog(
  logData: Omit<AuditLog, "id" | "timestamp">
): AuditLog {
  const newLog: AuditLog = {
    ...logData,
    id: `audit-${Date.now()}`,
    timestamp: new Date().toISOString(),
  };

  // Try to save to file (works locally)
  try {
    return auditLogsDB.create({
      ...logData,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    // File operations fail on Vercel, return mock log
    console.log("Audit log created:", newLog.action);
    return newLog;
  }
}

export function getUserProgress(userId: string): ModuleProgress[] {
  // Return hardcoded progress for demo users
  const demoProgress = DEMO_MODULE_PROGRESS.filter((p) => p.userId === userId);
  if (demoProgress.length > 0) {
    return demoProgress;
  }

  // Fallback to file-based lookup
  try {
    return moduleProgressDB.findMany({ userId });
  } catch (error) {
    return [];
  }
}

export function updateModuleProgress(
  userId: string,
  moduleId: string,
  progress: Partial<ModuleProgress>
): ModuleProgress | null {
  // Try file-based update (works locally)
  try {
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
  } catch (error) {
    // File operations fail on Vercel, return mock
    const mockProgress: ModuleProgress = {
      id: `progress-${Date.now()}`,
      userId,
      moduleId,
      completed: false,
      ...progress,
    };
    console.log("Module progress updated:", moduleId);
    return mockProgress;
  }
}

// Initialize with demo data
export function initializeDemoData() {
  // For Vercel compatibility, we use hardcoded data
  // The data is already initialized above as constants
  console.log("Demo data initialized!");
  console.log("Login credentials:");
  console.log("Patient: sarah.patient@demo.com / demo123");
  console.log("Researcher: dr.researcher@demo.com / demo123");
  console.log("Admin: admin@demo.com / demo123");
}

// Authentication helpers
export function validateUser(email: string, password: string): User | null {
  // Check hardcoded demo users first (works on Vercel)
  const demoUser = DEMO_USERS.find(
    (u) => u.email === email && u.password === password
  );

  if (demoUser) {
    // Update last login
    demoUser.lastLogin = new Date().toISOString();

    // Create audit log for successful login
    createAuditLog({
      userId: demoUser.id,
      action: "login",
      resource: "authentication",
      details: { success: true },
    });

    console.log("Login successful:", demoUser.email);
    return demoUser;
  }

  // Fallback to file-based users (for local development)
  try {
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
  } catch (error) {
    console.log("File-based auth not available, using demo users only");
  }

  // Log failed login attempt
  createAuditLog({
    userId: undefined,
    action: "login_failed",
    resource: "authentication",
    details: { success: false, email: email },
  });

  return null;
}

// Analytics helpers
export function getDashboardAnalytics() {
  // Return hardcoded analytics for demo (works on Vercel)
  const hardcodedAnalytics = {
    totalUsers: DEMO_USERS.length,
    patientsCount: DEMO_USERS.filter((u) => u.role === "PATIENT").length,
    researchersCount: DEMO_USERS.filter((u) => u.role === "RESEARCHER").length,
    recentAuditLogs: DEMO_AUDIT_LOGS.slice(0, 10),
    loginCount: DEMO_AUDIT_LOGS.filter((log) => log.action === "login").length,
    moduleCompletions: DEMO_MODULE_PROGRESS.filter((p) => p.completed).length,
  };

  // Try file-based analytics (works locally)
  try {
    const totalUsers = usersDB.count();
    if (totalUsers > 0) {
      // Use file-based data if available
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
  } catch (error) {
    console.log("Using demo analytics data");
  }

  return hardcodedAnalytics;
}
