import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<mat-card>
    <h2>Hello {{name}}!</h2>
    <h3 *ngIf="userData"><a href="#" (click)="logout()">Logout</a></h3>
    <nav>
      <ul>
        <li>
          <a mat-button routerLink="/teachers">
            <b>Teachers</b>
          </a>
        </li>
        <li>
          <a mat-button routerLink="/courses">
            <b>Courses</b>
          </a>
        </li>
        <li>
          <a mat-button routerLink="/students">
            <b>Students</b>
          </a>
        </li>
        <li>
          <a mat-button routerLink="/semesters">
            <b>Semesters</b>
          </a>
        </li>
        <li>
          <a mat-button routerLink="/teacher_semester_course">
            <b>Teacher courses by semester</b>
          </a>
        </li>
        <li>
          <a mat-button routerLink="/student_semester_course">
            <b>Student courses by semester</b>
          </a>
        </li>
      </ul>

    </nav>
  </mat-card>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit, OnDestroy  {
  @Input() name: string;

  userDataSub: Subscription;
  userData: any;

  constructor(private auth: AuthService){}

  ngOnInit(): void {
    this.userDataSub = this.auth.userData$.subscribe(
      (data: any) => this.userData = data
    );
  }

  ngOnDestroy(): void {
    this.userDataSub.unsubscribe();
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
  }

}
