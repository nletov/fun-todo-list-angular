import { ToDoItem } from './../todo-list/todo-list.component';
import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-todo-list-add-form',
  templateUrl: './todo-list-add-form.component.html',
  styleUrls: ['./todo-list-add-form.component.scss']
})
export class TodoListAddFormComponent implements OnInit {
  newToDoItem: ToDoItem;
  @Output() itemToAdd: EventEmitter<ToDoItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.newToDoItem = { id: null, title: '', isDone: false };
  }

  addNewTodo(): void {
    if (this.newToDoItem.title.trim() !== '') {
      this.itemToAdd.emit(this.newToDoItem);
      this.newToDoItem.title = '';
    }
  }
}
