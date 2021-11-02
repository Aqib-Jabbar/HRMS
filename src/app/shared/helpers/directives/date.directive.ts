import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: DateDirective, multi: true}]
})
export class DateDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors|null {
    const elementValue = control.value;

    if(elementValue === null && elementValue === undefined && elementValue === ""){
      return {"date_required":"date is required"};
    }

    const regExp = new RegExp("/^\d{2}\/\d{2}\/\d{4}$/");
    if (!regExp.test(elementValue)){
      return {"cus_pattern":"Value should be in valid date formate dd//mm//yyyy"};
    }

    return {'custom': true};
    }

}
