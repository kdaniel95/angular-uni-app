import { Component, OnInit, ViewChild } from '@angular/core';
import { selectTeachers } from '../store/course.selectors';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseModel } from '../store/course.model';
import { coursesRequestedAction } from '../store/course.actions';
import { Filterable } from 'src/app/util/filterable';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent extends Filterable<CourseModel> implements OnInit {

  @ViewChild(MatSort) sort: MatSort

  displayedColumns: string[] = ['name','code','credits','department'];

  courses$: Observable<CourseModel[]> = this.store.pipe(select(selectTeachers))

  constructor(
  private store: Store
  ) {
    super();
  }

  ngOnInit() {
    this.loadData(this.courses$);
    this.store.dispatch(coursesRequestedAction());
  }

  onMatSortChange(){
    this.dataSource.sort = this.sort;
  }
}
