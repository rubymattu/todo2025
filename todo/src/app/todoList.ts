import {TodoItem} from './todoItem';
export class TodoList {
  constructor(public user: string, private todoItems: TodoItem[] = []){
    // no statement needed
  }
  getItems(): readonly TodoItem[] {
    return this.todoItems;
  }
  addItem(task: string): void {
    this.todoItems.push(new TodoItem(task));
  }
}