import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs';
import { selectLoadedCourse } from '../store/course.selectors';
import { courseRequestedAction, courseUpdateAction } from '../store/course.actions';

@Component({
  selector: 'app-courses-update',
  templateUrl: './courses-update.component.html',
  styleUrls: ['./courses-update.component.css']
})
export class CoursesUpdateComponent implements OnInit {
  coursesForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => {
        const courseId = params.get('courseId')?? 1;
        this.store.dispatch(courseRequestedAction({id: +courseId}));
      })).subscribe();

      this.store.pipe(select(selectLoadedCourse)).subscribe(course => {
        if(course && this.coursesForm){
          this.coursesForm.controls['id'].setValue(course.id);
          this.coursesForm.controls['name'].setValue(course.name);
          this.coursesForm.controls['code'].setValue(course.code);
          this.coursesForm.controls['credits'].setValue(course.credits);
          this.coursesForm.controls['department'].setValue(course.department);
        }
      });


      this.coursesForm = this.formBuilder.group({
        id: [{value: 0, disabled: true}, [Validators.required]],
        name: ['', [Validators.required]],
        code: ['', [Validators.required, Validators.maxLength(5)]],
        credits: ['', [Validators.required, Validators.min(1)]],
        department: ['', [Validators.required]],
      });
  }

  onSubmit(courseData: any) {
    this.store.dispatch(courseUpdateAction(courseData));
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
