'use client';
import type { Task } from '@/types/database';
import { Card } from '@/components/ui/card';
const columns = { todo: 'Todo', in_progress: 'In Progress', completed: 'Completed' };
export function TaskBoard({ tasks }: { tasks: Task[] }) { return <div className="grid gap-4 lg:grid-cols-3">{Object.entries(columns).map(([status, label]) => <Card key={status} className="min-h-80"><h2 className="mb-4 font-semibold">{label}</h2><div className="space-y-3">{tasks.filter((task) => task.status === status).map((task) => <article key={task.id} draggable className="cursor-grab rounded-2xl border border-border bg-background p-4 transition hover:-translate-y-1 hover:shadow-md"><div className="flex items-center justify-between"><h3 className="font-medium">{task.title}</h3><span className="rounded-full bg-zinc-100 px-2 py-1 text-xs capitalize dark:bg-zinc-800">{task.priority}</span></div><p className="mt-2 text-sm text-zinc-500">{task.description}</p></article>)}</div></Card>)}</div>; }
