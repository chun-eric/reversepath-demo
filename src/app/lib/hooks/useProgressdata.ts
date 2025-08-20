// lib/hooks/useProgressData.ts
"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/app/lib/auth-context";

interface ProgressData {
  education: {
    completedModules: number;
    totalModules: number;
    percentage: number;
  };
  tracking: {
    todayCompleted: number;
    todayTotal: number;
    streakDays: number;
  };
  progress: {
    currentWeek: number;
    status: "On Track" | "Behind" | "Ahead";
    overallProgress: number;
  };
}

export function useProgressData() {
  const { user } = useAuth();
  const [progressData, setProgressData] = useState<ProgressData>({
    education: {
      completedModules: 1,
      totalModules: 4,
      percentage: 85,
    },
    tracking: {
      todayCompleted: 3,
      todayTotal: 5,
      streakDays: 7,
    },
    progress: {
      currentWeek: 3,
      status: "On Track",
      overallProgress: 75,
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // In a real app, you'd fetch this from your API
    const fetchProgressData = async () => {
      if (!user) return;

      setIsLoading(true);

      try {
        // Simulate API call
        // const response = await fetch(`/api/user/${user.id}/progress`);
        // const data = await response.json();

        // For now, using mock data
        // You can replace this with actual API calls
        setProgressData({
          education: {
            completedModules: 1,
            totalModules: 4,
            percentage: Math.round((1 / 4) * 100),
          },
          tracking: {
            todayCompleted: 3,
            todayTotal: 5,
            streakDays: 7,
          },
          progress: {
            currentWeek: 3,
            status: "On Track",
            overallProgress: 75,
          },
        });
      } catch (error) {
        console.error("Failed to fetch progress data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProgressData();
  }, [user]);

  // Helper functions for easy access
  const getEducationProgress = () => {
    return `${progressData.education.percentage}% Complete`;
  };

  const getTrackingProgress = () => {
    return `${progressData.tracking.todayCompleted}/${progressData.tracking.todayTotal} Complete`;
  };

  const getOverallProgress = () => {
    return `Week ${progressData.progress.currentWeek}: ${progressData.progress.status}`;
  };

  return {
    progressData,
    isLoading,
    getEducationProgress,
    getTrackingProgress,
    getOverallProgress,
  };
}
