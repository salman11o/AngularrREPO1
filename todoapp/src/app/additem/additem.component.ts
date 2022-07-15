import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todos } from '../Todos';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  title!: string;
  description!: string;
  s_no!: string;
  @Output() todoadd:EventEmitter<Todos> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

 onsub()
  {
    const todo=new Todos(this.title,this.description,this.s_no,true);
    this.todoadd.emit(todo);
 
  }
}
