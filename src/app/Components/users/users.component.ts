import { Component } from '@angular/core';
import { iUser } from '../../Models/i-user';
import { iTodo } from '../../Models/i-todo';
import { UsersService } from '../../Service/users.service';
import { ToDoService } from '../../Service/to-do.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: iUser[] = [];
  todos: iTodo[] = [];



  constructor(private userService: UsersService, private todoService: ToDoService) {}

  ngOnInit(): void {
    this.users = this.userService.getAllUsers();
    this.todos = this.todoService.getAllTasks()

  }

  getTasksForUser(userId: number): iTodo[] {
    return this.todos.filter(todo => todo.userId === userId);
  }

}
