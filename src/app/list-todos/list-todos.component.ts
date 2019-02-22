import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message : string;
  // = [
  //   new Todo(1, 'Learn Python', false, new Date()),
  //   new Todo(1, 'Learn Angular', false, new Date()),
  //   new Todo(1, 'Learn expert in many things', false, new Date())
  // ]

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodo();
  }

  refreshTodo() {
    this.todoService.retrieveAllTodos('devlabs').subscribe(
      response => {
        console.log(response)
        this.todos = response;
      }
    )

  }

  deleteTodo(id) {
    console.log(`delte todo  ${id}`);
    this.todoService.deleteTodo('devlabs', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} successful!`;
        this.refreshTodo();
      }
    )
  }

  updateTodo(id) {
    console.log(`Update ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo() {
    console.log('Adding new todo');
    this.router.navigate(['todos',-1])
  }

}
