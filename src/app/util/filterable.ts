import { Observable, Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { Injectable, OnDestroy } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Injectable()
export class Filterable<T> implements OnDestroy
{
  protected dataSource: MatTableDataSource<T>;
  private destroy$ = new Subject<void>();

  loadData(data: Observable<T[]>){
    data.pipe(takeUntil(this.destroy$)).subscribe((entries) => {
      this.dataSource = new MatTableDataSource<T>(entries);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  applyFilter(event: Event, column: keyof T) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();

    this.dataSource.filterPredicate = (data: T, filter: string) => {
      const col = (data[column] as string);

      if(col === undefined){
        return false;
      }

      return col.toString().toLowerCase().includes(filter);
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
