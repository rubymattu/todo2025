import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [FormsModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatBadgeModule,
    MatTableModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatSlideToggleModule
  ],
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo';

  private list = new TodoList("Raveena", [
    new TodoItem("Complete assignment", true),
    new TodoItem("Work on the project"),
    new TodoItem("Go for a walk")
  ]);

  get username(): string
  {
    return this.list.user;
  }

  get itemCount(): number{
    return this.list.items.filter(item => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => !item.complete);
  }
  
  addItem(newItem: string) {
    if (newItem != "") {
      this.list.addItem(newItem);
    }    
  }

}