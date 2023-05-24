import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { semesterCreateAction } from '../store/semester.actions';

@Component({
  selector: 'app-semesters-create',
  templateUrl: './semesters-create.component.html',
  styleUrls: ['./semesters-create.component.css']
})
export class SemestersCreateComponent {
  semestersForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.semestersForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
  }

  onSubmit(semesterData: any) {
    this.store.dispatch(semesterCreateAction(semesterData));
    this.semestersForm.reset();
    this.router.navigate(['/semesters']);
  }

  get name() {
    return this.semestersForm.get('name');
  }
  get startDate() {
    return this.semestersForm.get('startDate');
  }
  get endDate() {
    return this.semestersForm.get('endDate');
  }

  getNameErrorMessage() {
    if (this.name?.dirty || this.name?.touched) {
      if (this.name.hasError('required')) return 'You must enter a value!';
    }
    return '';
  }

  getStartDateErrorMessage() {
    if (this.startDate?.dirty || this.startDate?.touched) {
      if (this.startDate.hasError('required')) return 'You must enter a value!';
    }
    return '';
  }

  getEndDateErrorMessage() {
    if (this.endDate?.dirty || this.endDate?.touched) {
      if (this.endDate.hasError('required')) return 'You must enter a value!';
    }
    return '';
  }
}
