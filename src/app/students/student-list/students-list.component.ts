import { studentsRequestedAction } from './../store/student.actions';
import { Component, OnInit } from '@angular/core';
import { selectStudents } from '../store/student.selectors';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StudentModel } from '../store/student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'neptunCode', 'name', 'email', 'major'];

  students$: Observable<StudentModel[]> = this.store.pipe(select(selectStudents))

  constructor(
  private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(studentsRequestedAction());
  }

}
