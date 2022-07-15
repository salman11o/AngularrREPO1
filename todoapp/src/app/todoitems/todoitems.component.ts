import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { Todos } from './../Todos';

@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.css']
})
export class TodoitemsComponent implements OnInit {
  @Input()
  todo!: Todos;
  @Output() tododelete:EventEmitter<Todos> = new EventEmitter()

  constructor()
{

}
  ngOnInit(): void {
  }
onclick(todo:Todos)
{ this.tododelete.emit(todo);
console.log("onclick triggered");
}
}
