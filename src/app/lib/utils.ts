// Date formatting utilities
export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function formatTime(date: Date | string) {
  return new Intl.DateTimeFormat("en-AU", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export function formatDateTime(date: Date | string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

// Health data utilities
export function formatGlucoseValue(value: number) {
  return `${value} mg/dL`;
}

export function getGlucoseStatus(value: number) {
  if (value < 70)
    return { status: "low", color: "text-red-600", bgColor: "bg-red-100" };
  if (value > 180)
    return { status: "high", color: "text-red-600", bgColor: "bg-red-100" };
  if (value > 140)
    return {
      status: "elevated",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    };
  return { status: "normal", color: "text-green-600", bgColor: "bg-green-100" };
}

// Weight utilities
export function formatWeight(weight: number) {
  return `${weight.toFixed(1)} kg`;
}

// Progress calculation utilities
export function calculateProgress(current: number, target: number) {
  return Math.min(Math.round((current / target) * 100), 100);
}

// Educational content utilities
export function calculateModuleProgress(
  completedModules: number,
  totalModules: number
) {
  return Math.round((completedModules / totalModules) * 100);
}

// Calorie calculation utilities
export function calculateDailyCalories(meals: Array<{ calories: number }>) {
  return meals.reduce((total, meal) => total + meal.calories, 0);
}

export function getCalorieStatus(consumed: number, target: number) {
  const percentage = (consumed / target) * 100;

  if (percentage > 110)
    return { status: "over", color: "text-red-600", bgColor: "bg-red-100" };
  if (percentage > 90)
    return {
      status: "on-track",
      color: "text-green-600",
      bgColor: "bg-green-100",
    };
  return { status: "under", color: "text-blue-600", bgColor: "bg-blue-100" };
}

// Class name utility for conditional styling
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}
