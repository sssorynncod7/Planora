import { TaskBoard } from '@/components/tasks/task-board';
import type { Task } from '@/types/database';
const tasks: Task[] = [{id:'1',user_id:'demo',title:'Design weekly plan',description:'Prioritize goals and block focus time',priority:'high',status:'todo',position:1,created_at:'',updated_at:''},{id:'2',user_id:'demo',title:'Review budget',description:'Finance category recurring check',priority:'medium',status:'in_progress',position:2,created_at:'',updated_at:''},{id:'3',user_id:'demo',title:'Morning workout',description:'Health habit support task',priority:'low',status:'completed',position:3,created_at:'',updated_at:''}];
export default function Page(){return <div className="space-y-6"><h1 className="text-3xl font-bold">Tasks</h1><TaskBoard tasks={tasks}/></div>}
