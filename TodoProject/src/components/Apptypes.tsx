
 export type todoType = {
    taskName:string;
    duration:number;
  }
 export type PropsType = {
    task:todoType;
    deleteTask(nameToDelete:string): void
  }