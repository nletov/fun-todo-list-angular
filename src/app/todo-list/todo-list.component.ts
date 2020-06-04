import { Component, OnInit } from '@angular/core';

export interface ToDoItem {
  id?: number;
  title: string;
  isDone: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todosList: ToDoItem[] = [
    {id: 1, title: 'Task 1', isDone: false},
    {id: 2, title: 'Task 2', isDone: false},
    {id: 3, title: 'Task 3', isDone: false}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addNewTodo(newToDo: ToDoItem): void {
    this.todosList.push({id: this.todosList.length + 1, title: newToDo.title, isDone: false});
  }

  toDoItemChecked(toDoItem: ToDoItem): void {
    console.log(toDoItem.title + toDoItem.isDone);
  }
}
