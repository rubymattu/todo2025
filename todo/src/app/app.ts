import { Component } from '@angular/core';
import { TodoList} from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo';

  private list = new TodoList('Raveena', [
    new TodoItem('Buy groceries'),
    new TodoItem('Go out for a walk', true),
    new TodoItem('Read a book'),
    new TodoItem('Complete Angular project')
  ]);
  get username(): string {
    return this.list.user;
  }
  get itemCount(): number {
    return this.list.getItems().filter(item => !item.completed).length;
  }
}
