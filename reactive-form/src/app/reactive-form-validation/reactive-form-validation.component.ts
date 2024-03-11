import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css'],
})
export class ReactiveFormValidationComponent {
  useForm: FormGroup;
  isFormSubmited: boolean = false;

  constructor() {
    this.useForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      userName: new FormControl('', [Validators.required, Validators.email]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl(''),
      zipcode: new FormControl(''),
      isAgree: new FormControl(false),
    });
  }

  onSubmit() {
    const isFormValid = this.useForm.valid;
    this.isFormSubmited = !isFormValid;
  }
}
