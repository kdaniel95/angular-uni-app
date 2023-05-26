import { AuthService } from './../../auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { TeacherTable } from 'src/app/data/teachers.data';
import { StudentTable } from 'src/app/data/student.data';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  neptunCode = '';
  loginError = false;

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    let token = '';

    // First search in teachers then students because I'm lazy to create a UsersTable...
    const userTeacher = TeacherTable.teachers.find(
      (teacher) => teacher.neptunCode === this.neptunCode
    );
    const userStudent = StudentTable.students.find(
      (student) => student.neptunCode === this.neptunCode
    );

    if (userTeacher) {
      token = this.authService.getUserToken(userTeacher.neptunCode);
    }

    if (userStudent) {
      token = this.authService.getUserToken(userStudent.neptunCode);
    }

    if (token) {
        const helper = new JwtHelperService();
        const decoded = helper.decodeToken(token);

        if (decoded != null) {
          this.authService.setUserData(JSON.stringify(decoded));
        }

        localStorage.setItem('token', token);
        this.router.navigate(['/home']);
      } else {
        this.loginError = true;
      }
    }
}
