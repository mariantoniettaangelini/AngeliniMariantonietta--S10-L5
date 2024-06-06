import { ToDoService } from './../../Service/to-do.service';
import { Component, OnInit } from '@angular/core';
import { iUser } from '../../Models/i-user';
import { iTodo } from '../../Models/i-todo';
import { UsersService } from '../../Service/users.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent implements OnInit{
  users: iUser[] = []
  getDone: iTodo[] = []


  constructor(private taskSvc: ToDoService, private userSvc: UsersService) {}

  ngOnInit():void {
    this.users = this.userSvc.getAllUsers()
    this.getDone = this.taskSvc.getDone()

  }

}
