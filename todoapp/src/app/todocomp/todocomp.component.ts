import { Component, OnInit } from '@angular/core';
import { Todos } from '../Todos';

@Component({
  selector: 'app-todocomp',
  templateUrl: './todocomp.component.html',
  styleUrls: ['./todocomp.component.css']
})
export class TodocompComponent implements OnInit {
  todos:Todos[];

  constructor() {
    let obj=new Todos("title","1","abc",true);
    let obj1=new Todos("title","1","abc",true);
   this.todos=[];
  }

  ngOnInit(): void {
  }
  tododel(todo:Todos)
  {
    let i=this.todos.indexOf(todo);
    console.log(this.todos.splice(i,1))
  }
  addtodo(todo:Todos)
  {
    this.todos.push(todo);
    console.log(this.todos);
  }
}
