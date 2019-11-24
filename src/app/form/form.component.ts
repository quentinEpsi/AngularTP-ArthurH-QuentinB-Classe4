import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  userprofileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required) ,
    age: new FormControl('', [Validators.maxLength(2), Validators.minLength(1), Validators.min(18)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    console.warn(this.userprofileForm.value);

    console.log(this.userprofileForm.controls['firstName'].value);
  }
}
