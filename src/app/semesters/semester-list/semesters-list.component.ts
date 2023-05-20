import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSemesters } from '../store/semester.selectors';
import { semestersRequestedAction } from '../store/semester.actions';
import { SemesterModel } from '../store/semester.model';

@Component({
  selector: 'app-semesters-list',
  templateUrl: './semesters-list.component.html',
  styleUrls: ['./semesters-list.component.css']
})
export class SemestersListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'startDate', 'endDate', 'courses'];

  semesters$: Observable<SemesterModel[]> = this.store.pipe(select(selectSemesters))

  constructor(
  private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(semestersRequestedAction());
  }

}
