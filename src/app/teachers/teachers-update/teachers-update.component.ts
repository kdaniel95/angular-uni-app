import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Position, Position2LabelMapping } from 'src/app/data/teachers.data';
import { neptunCodeValidator } from 'src/app/validators/neptunCode.validator';
import { teacherRequestedAction, teacherUpdateAction } from '../store/teachers.actions';
import { map } from 'rxjs';
import { selectLoadedTeacher } from '../store/teachers.selectors';
import { Role, Role2LabelMapping } from 'src/app/data/role.enum';

@Component({
  selector: 'app-teachers-update',
  templateUrl: './teachers-update.component.html',
  styleUrls: ['./teachers-update.component.css']
})
export class TeachersUpdateComponent {
  teachersForm: FormGroup;

  Position2LabelMapping = Position2LabelMapping;
  Role2LabelMapping = Role2LabelMapping;

  positions = Object.values(Position);
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
        const teacherId = params.get('teacherId')?? 1;
        this.store.dispatch(teacherRequestedAction({id: +teacherId}));
      })).subscribe();

      this.store.pipe(select(selectLoadedTeacher)).subscribe(teacher => {
        if(teacher && this.teachersForm){
          this.teachersForm.controls['id'].setValue(teacher.id);
          this.teachersForm.controls['neptunCode'].setValue(teacher.neptunCode);
          this.teachersForm.controls['name'].setValue(teacher.name);
          this.teachersForm.controls['email'].setValue(teacher.email);
          this.teachersForm.controls['position'].setValue(teacher.position);
          this.teachersForm.controls['roles'].setValue(teacher.roles);
          this.teachersForm.controls['department'].setValue(teacher.department);
          this.teachersForm.controls['dob'].setValue(teacher.dob);
        }
      });


    this.teachersForm = this.formBuilder.group({
      id: [{value: 0, disabled: true}, [Validators.required]],
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
    this.store.dispatch(teacherUpdateAction(teacherData));
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
  get roles(){
    return this.teachersForm.get('roles');
  }
  get dob(){
    return this.teachersForm.get('dob');
  }
  get department(){
    return this.teachersForm.get('department');
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
