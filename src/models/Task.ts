class Task {
    static idCounter = 1;
    id: number;
    title: string;
    completed: boolean;
  
    constructor(title: string) {
      this.id = Task.idCounter++;
      this.title = title;
      this.completed = false;
    }
  
    markComplete() {
      this.completed = true;
    }
  }
  
  class UrgentTask extends Task {
    deadline: Date;
  
    constructor(title: string, deadline: Date) {
      super(title);
      this.deadline = deadline;
    }
  
    markComplete() {
      console.log(`Urgent task "${this.title}" completed before deadline!`);
      super.markComplete();
    }
  }
  
  export { Task, UrgentTask };
  