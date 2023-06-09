import { Component, OnInit } from '@angular/core';
import { studentRequestedAction, studentUpdateAction } from '../store/student.actions';
import { selectLoadedStudent } from '../store/student.selectors';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { neptunCodeValidator } from 'src/app/validators/neptunCode.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Major, Major2LabelMapping } from 'src/app/data/student.data';
import { Role, Role2LabelMapping } from 'src/app/data/role.enum';

@Component({
  selector: 'app-students-update',
  templateUrl: './students-update.component.html',
  styleUrls: ['./students-update.component.css']
})
export class StudentsUpdateComponent implements OnInit {
  studentsForm: FormGroup;

  Major2LabelMapping = Major2LabelMapping;

  Role2LabelMapping = Role2LabelMapping;

  majors = Object.values(Major);

  roless = Object.values(Role);

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => {
        const studentId = params.get('studentId')?? 1;
        this.store.dispatch(studentRequestedAction({id: +studentId}));
      })).subscribe();

      this.store.pipe(select(selectLoadedStudent)).subscribe(student => {
        if(student && this.studentsForm){
          this.studentsForm.controls['id'].setValue(student.id);
          this.studentsForm.controls['neptunCode'].setValue(student.neptunCode);
          this.studentsForm.controls['roles'].setValue(student.roles);
          this.studentsForm.controls['dob'].setValue(student.dob);
          this.studentsForm.controls['name'].setValue(student.name);
          this.studentsForm.controls['email'].setValue(student.email);
          this.studentsForm.controls['major'].setValue(student.major);
        }
      });


    this.studentsForm = this.formBuilder.group({
      id: [{value: 0, disabled: true}, [Validators.required]],
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
    this.store.dispatch(studentUpdateAction(studentData));
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

  getDobErrorMessage() {
    if (this.dob?.dirty || this.dob?.touched) {
      if (this.dob.hasError('required')) return 'You must enter a value!';
    }
    return '';
  }
}
