import { AbstractControl, ControlContainer } from "@angular/forms"

export class UsernameValidators{
 static cannotContainSpace(control : AbstractControl){
        if((control.value as String).indexOf(' ')>=0)
        return {cannotContainSpace:true};

        return null;
    }
}