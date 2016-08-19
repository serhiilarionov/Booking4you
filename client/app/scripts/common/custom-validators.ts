import { FormGroup } from '@angular/forms';
export class CustomValidators {
  static areEqual(group: FormGroup): {[key: string]: boolean} {
    let values: string[] = [];

    // push all values in one array
    for (let controlName in group.controls) {
      if (group.controls.hasOwnProperty(controlName)) {
        values.push(group.controls[controlName].value);
      }
    }

    // compare these values
    for (let value of values) {
      if (value !== values[0]) {
        return {
          areEqual: {
            message: `${value} not equal ${values[0]}`
          }
        };
      }
    }
    return null;
  }
}
