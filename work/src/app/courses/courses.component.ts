import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title;
  constructor(service:CoursesService)
  {this.title=service.getc();
}

  ngOnInit(): void {
  }


}
