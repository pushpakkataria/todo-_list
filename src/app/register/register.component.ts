import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  contactForm = new FormGroup({

    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    organization: new FormControl('', [Validators.required, Validators.minLength(10)]),
    orgaddress: new FormControl('', [Validators.required, Validators.minLength(10)]),
    calender: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(2)]),

  })
  get fname() {
    return this.contactForm.get('firstname')
  }
  get lname() {
    return this.contactForm.get('lastname')
  }
  get email() {
    return this.contactForm.get('email')
  }
  get phn() {
    return this.contactForm.get('phone')
  }
  get orgname() {
    return this.contactForm.get('organization')
  }
  get org() {
    return this.contactForm.get('orgaddress')
  }
  get pasd() {
    return this.contactForm.get('password')
  }
  get cmd() {
    return this.contactForm.get("calender")
  }
  onSubmit() {
    if (this.contactForm.invalid) {
      alert("Please fill all required data");
    } else {
      console.log(this.contactForm.value);
    }
  }

  resetForm() {
    this.contactForm.reset()
  }
}
