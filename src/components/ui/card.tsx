import { cn } from '@/lib/utils';
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={cn('rounded-3xl border border-border bg-white/80 p-6 shadow-sm backdrop-blur dark:bg-zinc-900/80', className)} {...props} />; }
