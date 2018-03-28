import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5),
      this.zipCodeValidator
    ]),
    country: new FormControl('', [Validators.required]),
    gender: new FormControl('f', [Validators.required]),
  });

  constructor() {
    this.myForm.get('fullName')
      .valueChanges
      .subscribe((x) => {
        console.log('Fullname changed to: ', x);
      });
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.myForm);
  }

  zipCodeValidator(control: AbstractControl): ValidationErrors | null {
    const zipCode = control.value;
    if (zipCode >= 10000 && zipCode <= 99999) {
      return null;
    }
    return {
      'zipCodeInvalid': 'Zip code is not valid'
    };
  }
}
