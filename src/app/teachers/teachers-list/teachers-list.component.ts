import { Component, OnInit } from '@angular/core';
import { selectTeachers } from '../store/teachers.selectors';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TeacherModel } from '../store/teachers.model';
import { teachersRequestedAction } from '../store/teachers.actions';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {

  displayedColumns: string[] = ['id','neptunCode','name','email','position'];

  teachers$: Observable<TeacherModel[]> = this.store.pipe(select(selectTeachers))

  constructor(
  private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(teachersRequestedAction());
  }

}
