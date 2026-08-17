'use server';
import type { PlannerPlan } from '@/types/database';

export async function generatePlan(goal: string): Promise<PlannerPlan> {
  const weeks = goal.match(/(\d+)\s*(month|week)/i)?.[1] ?? '12';
  return { summary: `A focused ${weeks}-week plan for: ${goal}`, milestones: [1, 2, 3].map((n) => ({ title: `Milestone ${n}`, week: n * 4, tasks: [`Research ${goal}`, `Practice core skill ${n}`, `Review progress`] })), dailyTasks: ['Plan the day', 'Complete one focused work block', 'Log progress'], optimizationTips: ['Move overdue tasks to the next available focus block', 'Batch shallow tasks after lunch', 'Protect mornings for high-priority work'] };
}
