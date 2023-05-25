import { Role, Role2LabelMapping } from 'src/app/data/role.enum';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { neptunCodeValidator } from 'src/app/validators/neptunCode.validator';
import { teacherCreateAction } from '../store/teachers.actions';
import { Position, Position2LabelMapping } from './../../data/teachers.data';

@Component({
  selector: 'app-teachers-create',
  templateUrl: './teachers-create.component.html',
  styleUrls: ['./teachers-create.component.css'],
})
export class TeachersCreateComponent implements OnInit {
  teachersForm: FormGroup;

  Position2LabelMapping = Position2LabelMapping;
  Role2LabelMapping = Role2LabelMapping;

  positions = Object.values(Position);
  roless = Object.values(Role);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.teachersForm = this.formBuilder.group({
      neptunCode: [
        '',
        [Validators.required, neptunCodeValidator()],
      ],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      position: ['', [Validators.required]],
      department: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      roles: ['', [Validators.required]]
    });
  }

  onSubmit(teacherData: any) {
    this.store.dispatch(teacherCreateAction(teacherData));
    this.teachersForm.reset();
    this.router.navigate(['/teachers']);
  }

  get neptunCode() {
    return this.teachersForm.get('neptunCode');
  }
  get name() {
    return this.teachersForm.get('name');
  }
  get email() {
    return this.teachersForm.get('email');
  }
  get position() {
    return this.teachersForm.get('position');
  }
  get department()
  {
    return this.teachersForm.get('department');
  }
  get dob(){
    return this.teachersForm.get('dob');
  }
  get roles(){
    return this.teachersForm.get('roles');
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

  getPositionErrorMessage() {
    if (this.position?.dirty || this.position?.touched) {
      if (this.position.hasError('required')) return 'You must enter a value!';
    }
    return '';
  }

  getDepartmentErrorMessage() {
    if (this.department?.dirty || this.department?.touched) {
      if (this.department.hasError('required')) return 'You must enter a value!';
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
