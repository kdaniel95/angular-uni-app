import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { teachersRequestedAction } from '../store/teachers.actions';
import { TeacherModel } from '../store/teachers.model';
import { selectTeachers } from '../store/teachers.selectors';
import { Filterable } from './../../util/filterable';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css'],
})
export class TeachersListComponent
  extends Filterable<TeacherModel>
  implements OnInit
{
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['neptunCode', 'name', 'email', 'position'];

  teachers$: Observable<TeacherModel[]> = this.store.pipe(
    select(selectTeachers)
  );

  constructor(private store: Store) {
    super();
  }

  ngOnInit() {
    this.loadData(this.teachers$);
    this.store.dispatch(teachersRequestedAction());
  }

  onMatSortChange() {
    this.dataSource.sort = this.sort;
  }
}
