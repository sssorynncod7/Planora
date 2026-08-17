import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) { return <button className={cn('rounded-2xl bg-primary px-4 py-2 font-medium text-primary-foreground transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-400', className)} {...props} />; }
