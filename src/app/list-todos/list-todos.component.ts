import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  todos = [
    new Todo(1,'Learn spring services',false,new Date()),
    new Todo(2,'Learn angular',false,new Date()),
    new Todo(3,'Connect angular to spring',false,new Date()),
    new Todo(4,'Learn advanced spring services',false,new Date())
  ]
  constructor() { }

  ngOnInit() {
  }

}
