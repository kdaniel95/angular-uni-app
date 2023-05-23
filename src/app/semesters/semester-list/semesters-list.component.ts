import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Filterable } from 'src/app/util/filterable';
import { semestersRequestedAction } from '../store/semester.actions';
import { SemesterModel } from '../store/semester.model';
import { selectSemesters } from '../store/semester.selectors';

@Component({
  selector: 'app-semesters-list',
  templateUrl: './semesters-list.component.html',
  styleUrls: ['./semesters-list.component.css'],
})
export class SemestersListComponent
  extends Filterable<SemesterModel>
  implements OnInit
{
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['name', 'startDate', 'endDate'];

  semesters$: Observable<SemesterModel[]> = this.store.pipe(
    select(selectSemesters)
  );

  constructor(private store: Store) {
    super();
  }

  ngOnInit() {
    this.loadData(this.semesters$);
    this.store.dispatch(semestersRequestedAction());
  }

  onMatSortChange() {
    this.dataSource.sort = this.sort;
  }
}
