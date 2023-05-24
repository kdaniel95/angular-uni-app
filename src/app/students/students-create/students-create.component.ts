import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Major, Major2LabelMapping } from 'src/app/data/student.data';
import { regExValidator } from 'src/app/validators/regex.validator';
import { studentCreateAction } from '../store/student.actions';

@Component({
  selector: 'app-students-create',
  templateUrl: './students-create.component.html',
  styleUrls: ['./students-create.component.css'],
})
export class StudentsCreateComponent {
  studentsForm: FormGroup;

  Major2LabelMapping = Major2LabelMapping;

  majors = Object.values(Major);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.studentsForm = this.formBuilder.group({
      neptunCode: [
        '',
        [Validators.required, regExValidator(/^[a-zA-Z][a-zA-Z0-9]{5}$/i)],
      ],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      major: ['', [Validators.required]],
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

  getNeptunCodeErrorMessage() {
    if (this.neptunCode?.dirty || this.neptunCode?.touched) {
      if (this.neptunCode.hasError('required'))
        return 'You must enter a value!';
      if (this.neptunCode.hasError('regEx'))
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
}
