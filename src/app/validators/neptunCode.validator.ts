import { AbstractControl, ValidatorFn } from '@angular/forms';

export function neptunCodeValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    return (new RegExp(/^[a-zA-Z][a-zA-Z0-9]{5}$/i)).test(control.value) ? null : {'neptunCode': {value: control.value}};
  };
}
