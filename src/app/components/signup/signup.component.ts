import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupform = new FormGroup({
    username: new FormControl('jayveer',Validators.required),
    pass: new FormControl('hello',Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.signupform.value);
  }
}
