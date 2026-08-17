export type Priority = 'low' | 'medium' | 'high';
export type TaskStatus = 'todo' | 'in_progress' | 'completed';
export type CalendarView = 'day' | 'week' | 'month';

export interface Category { id: string; user_id: string; name: string; color: string; created_at: string; }
export interface Goal { id: string; user_id: string; title: string; description?: string; horizon: 'short_term' | 'long_term'; progress: number; target_date?: string; created_at: string; }
export interface Task { id: string; user_id: string; category_id?: string; goal_id?: string; title: string; description?: string; priority: Priority; status: TaskStatus; due_at?: string; reminder_at?: string; position: number; created_at: string; updated_at: string; category?: Category; goal?: Goal; }
export interface Habit { id: string; user_id: string; title: string; cadence: 'daily' | 'weekly'; streak: number; created_at: string; completions?: HabitCompletion[]; }
export interface HabitCompletion { id: string; habit_id: string; user_id: string; completed_on: string; }
export interface Note { id: string; user_id: string; folder_id?: string; title: string; content: string; pinned: boolean; created_at: string; updated_at: string; }
export interface ActivityLog { id: string; user_id: string; entity_type: string; entity_id?: string; action: string; metadata: Record<string, unknown>; created_at: string; }
export interface PlannerMilestone { title: string; week: number; tasks: string[]; }
export interface PlannerPlan { summary: string; milestones: PlannerMilestone[]; dailyTasks: string[]; optimizationTips: string[]; }
