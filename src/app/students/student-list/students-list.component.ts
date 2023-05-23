import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Filterable } from 'src/app/util/filterable';
import { StudentModel } from '../store/student.model';
import { selectStudents } from '../store/student.selectors';
import { studentsRequestedAction } from './../store/student.actions';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent
  extends Filterable<StudentModel>
  implements OnInit
{
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['neptunCode', 'name', 'email', 'major'];

  students$: Observable<StudentModel[]> = this.store.pipe(
    select(selectStudents)
  );

  constructor(private store: Store) {
    super();
  }

  ngOnInit() {
    this.loadData(this.students$);
    this.store.dispatch(studentsRequestedAction());
  }

  onMatSortChange() {
    this.dataSource.sort = this.sort;
  }
}
