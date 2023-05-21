import { Filterable } from './../../util/filterable';
import { Component, OnInit, ViewChild } from '@angular/core';
import { selectTeachers } from '../store/teachers.selectors';
import { Store, select } from '@ngrx/store';
import {
  Observable,
} from 'rxjs';
import { TeacherModel } from '../store/teachers.model';
import { teachersRequestedAction } from '../store/teachers.actions';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css'],
})
export class TeachersListComponent extends Filterable<TeacherModel> implements OnInit {

  @ViewChild(MatSort) sort: MatSort

  displayedColumns: string[] = [
    'neptunCode',
    'name',
    'email',
    'position',
  ];

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

  onMatSortChange(){
    this.dataSource.sort = this.sort;
  }
}
