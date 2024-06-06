import { Component, Input, OnInit, input } from '@angular/core';
import { iUser } from '../../Models/i-user';
import { iTodo } from '../../Models/i-todo';
import { UsersService } from '../../Service/users.service';
import { ToDoService } from '../../Service/to-do.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit  {
  users: iUser[]=[];
  tasks: iTodo[]=[];
  postConAutore: (iTodo & {author?: {firstName:string; lastName:string}})[] = [];

  //BARRA DI RICERCA
  searchText: string = '';
  filteredTodos: iTodo[] = [];


  constructor(private userSvc: UsersService, private taskSvc: ToDoService) {
    this.filteredTodos = this.tasks;
   }

  ngOnInit(): void {

    const tasks = this.taskSvc.getAllTasks();
    const users = this.userSvc.getAllUsers();


   this.postConAutore = tasks.map(t => {
      let author = users.find(u => u.id == t.userId)
      t.author = author
      return t
    })
    console.log(this.postConAutore)

  }
  //BARRA DI RICERCA
  search(): void {
    this.filteredTodos = this.tasks.filter(task =>
      task.todo.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}


