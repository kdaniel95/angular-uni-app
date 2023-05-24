import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { courseCreateAction } from '../store/course.actions';

@Component({
  selector: 'app-courses-create',
  templateUrl: './courses-create.component.html',
  styleUrls: ['./courses-create.component.css']
})
export class CoursesCreateComponent {
  coursesForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.coursesForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required, Validators.maxLength(5)]],
      credits: ['', [Validators.required, Validators.min(1)]],
      department: ['', [Validators.required]],
    });
  }

  onSubmit(courseData: any) {
    this.store.dispatch(courseCreateAction(courseData));
    this.coursesForm.reset();
    this.router.navigate(['/courses']);
  }

  get name() {
    return this.coursesForm.get('name');
  }
  get code() {
    return this.coursesForm.get('code');
  }
  get credits() {
    return this.coursesForm.get('credits');
  }
  get department() {
    return this.coursesForm.get('department');
  }

  getNameErrorMessage() {
    if (this.name?.dirty || this.name?.touched) {
      if (this.name.hasError('required')) return 'You must enter a value!';
    }
    return '';
  }

  getCodeErrorMessage() {
    if (this.code?.dirty || this.code?.touched) {
      console.log(this.code);
      if (this.code.hasError('required')) return 'You must enter a value!';
      if (this.code.hasError('maxlength')) return 'You can enter at most 4 characters!';
    }
    return '';
  }

  getCreditsErrorMessage() {
    if (this.credits?.dirty || this.credits?.touched) {
      if (this.credits.hasError('required')) return 'You must enter a value!';
      if (this.credits.hasError('min')) return 'You must enter a value >= 1!';
    }
    return '';
  }

  getDepartmentErrorMessage() {
    if (this.department?.dirty || this.department?.touched) {
      if (this.department.hasError('required')) return 'You must enter a value!';
    }
    return '';
  }
}
