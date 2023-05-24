import { Component, OnInit } from '@angular/core';
import { semesterRequestedAction, semesterUpdateAction } from '../store/semester.actions';
import { map } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectLoadedSemester } from '../store/semester.selectors';

@Component({
  selector: 'app-semesters-update',
  templateUrl: './semesters-update.component.html',
  styleUrls: ['./semesters-update.component.css']
})
export class SemestersUpdateComponent implements OnInit {

  semestersForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}


  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => {
        const semesterId = params.get('semesterId')?? 1;
        this.store.dispatch(semesterRequestedAction({id: +semesterId}));
      })).subscribe();

      this.store.pipe(select(selectLoadedSemester)).subscribe(semester => {
        if(semester && this.semestersForm){
          this.semestersForm.controls['id'].setValue(semester.id);
          this.semestersForm.controls['name'].setValue(semester.name);
          this.semestersForm.controls['startDate'].setValue(semester.startDate);
          this.semestersForm.controls['endDate'].setValue(semester.endDate);
        }
      });


    this.semestersForm = this.formBuilder.group({
      id: [{value: 0, disabled: true}, [Validators.required]],
      name: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
  }

  onSubmit(semesterData: any) {
    this.store.dispatch(semesterUpdateAction(semesterData));
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
