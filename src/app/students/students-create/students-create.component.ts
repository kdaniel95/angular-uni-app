import { Role2LabelMapping } from './../../data/role.enum';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Major, Major2LabelMapping } from 'src/app/data/student.data';
import { neptunCodeValidator } from 'src/app/validators/neptunCode.validator';
import { studentCreateAction } from '../store/student.actions';
import { Role } from 'src/app/data/role.enum';

@Component({
  selector: 'app-students-create',
  templateUrl: './students-create.component.html',
  styleUrls: ['./students-create.component.css'],
})
export class StudentsCreateComponent {
  studentsForm: FormGroup;

  Major2LabelMapping = Major2LabelMapping;

  Role2LabelMapping = Role2LabelMapping;

  majors = Object.values(Major);

  roless = Object.values(Role);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.studentsForm = this.formBuilder.group({
      neptunCode: [
        '',
        [Validators.required, neptunCodeValidator()],
      ],
      dob: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      major: ['', [Validators.required]],
      roles: ['', [Validators.required]]
    });
  }

  onSubmit(studentData: any) {
    this.store.dispatch(studentCreateAction(studentData));
    this.studentsForm.reset();
    this.router.navigate(['/students']);
  }

  get neptunCode() {
    return this.studentsForm.get('neptunCode');
  }
  get name() {
    return this.studentsForm.get('name');
  }
  get email() {
    return this.studentsForm.get('email');
  }
  get major() {
    return this.studentsForm.get('major');
  }
  get roles(){
    return this.studentsForm.get('roles');
  }
  get dob(){
    return this.studentsForm.get('dob');
  }

  getNeptunCodeErrorMessage() {
    if (this.neptunCode?.dirty || this.neptunCode?.touched) {
      if (this.neptunCode.hasError('required'))
        return 'You must enter a value!';
      if (this.neptunCode.hasError('neptunCode'))
        return 'You must enter a valid Neptun code!';
    }
    return '';
  }

  getNameErrorMessage() {
    if (this.name?.dirty || this.name?.touched) {
      if (this.name.hasError('required')) return 'You must enter a value!';
      if (this.name.hasError('maxlength'))
        return 'You can enter at most 50 characters!';
    }
    return '';
  }

  getEmailErrorMessage() {
    if (this.email?.dirty || this.email?.touched) {
      if (this.email.hasError('required')) return 'You must enter a value!';
      if (this.email.hasError('email')) return 'You must enter a valid email!';
    }
    return '';
  }

  getMajorErrorMessage() {
    if (this.major?.dirty || this.major?.touched) {
      if (this.major.hasError('required')) return 'You must enter a value!';
    }
    return '';
  }

  getRolesErrorMessage() {
    if (this.roles?.dirty || this.roles?.touched) {
      if (this.roles.hasError('required')) return 'You must enter a value!';
    }
    return '';
  }

  getDobErrorMessage() {
    if (this.dob?.dirty || this.dob?.touched) {
      if (this.dob.hasError('required')) return 'You must enter a value!';
    }
    return '';
  }
}
