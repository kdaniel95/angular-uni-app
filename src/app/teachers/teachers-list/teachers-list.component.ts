import { Component, OnInit } from '@angular/core';
import { selectTeachers } from '../store/teachers.selectors';
import { Store, select } from '@ngrx/store';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
} from 'rxjs';
import { TeacherModel } from '../store/teachers.model';
import { teachersRequestedAction } from '../store/teachers.actions';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css'],
})
export class TeachersListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'neptunCode',
    'name',
    'email',
    'position',
  ];

  teachers$: Observable<TeacherModel[]> = this.store.pipe(
    select(selectTeachers)
  );

  dataSource: MatTableDataSource<TeacherModel>;

  private destroy$ = new Subject<void>();

  constructor(private store: Store) {}

  ngOnInit() {
    this.loadData();
    this.store.dispatch(teachersRequestedAction());
  }

  loadData(){
    this.teachers$.pipe(takeUntil(this.destroy$)).subscribe((teachers) => {
      this.dataSource = new MatTableDataSource<TeacherModel>(teachers);
    });
  }

  ngonDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  applyFilter(event: Event, column: string) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();

    this.dataSource.filterPredicate = (data: TeacherModel, filter: string) => {
      const col = data[column];

      if(col === undefined){
        return;
      }

      return data[column].toString().toLowerCase().includes(filter);
    };

    this.dataSource.filter = filterValue;

    const filterSubject = new Subject<string>();
    filterSubject.next(filterValue);

    filterSubject
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((value) => {
        this.dataSource.filter = value;
      });
  }
}
