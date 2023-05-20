import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../data/student.data';
import { Teacher } from '../data/teachers.data';
import { Course } from '../data/course.data';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

    transform(input:Array<Teacher | Student | Course>): string {
      return input.map(i => i.name).join(', ')
  }

}
