import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signinForm!: FormGroup;
  public submitted = false;  

  constructor(
    private router: Router,
    public fb: FormBuilder,

  ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }) 
  
  }

  get formControl() {
    return this.signinForm.controls;
  }

  signUp(){
    this.router.navigate(["/home/Signup"])
  }

  loginUser(){
    this.submitted = true;
    if(this.signinForm.invalid){
      return;
    }else{
      console.log(this.signinForm.value)
    }
  }

}
