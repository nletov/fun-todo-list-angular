import { ToDoItem } from './../todo-list/todo-list.component';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() toDoItem: ToDoItem;
  @Output() toDoItemChecked: EventEmitter<ToDoItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  checkValue(): void {
    this.toDoItemChecked.emit(this.toDoItem);
  }
}
