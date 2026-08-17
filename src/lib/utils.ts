import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function productivityScore(completed: number, total: number) { return total === 0 ? 0 : Math.round((completed / total) * 100); }
