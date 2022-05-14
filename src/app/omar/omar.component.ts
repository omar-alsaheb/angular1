import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
// import { CustomValidators } from './custome-validators';
@Component({
  selector: 'app-omar',
  templateUrl: './omar.component.html',
  styleUrls: ['./omar.component.css']
})
export class OmarComponent implements OnInit {
  signupForm: FormGroup;

  constructor(public http:HttpClient) { }
  accountId:string;
  password:string;

  ngOnInit(): void {
    this.signupForm= new FormGroup({
      'Account_ID':new FormControl(null,[Validators.required]),
      'Password' : new FormControl(null,[Validators.required]),
      'IsMd5Password' : new FormControl(false),
      'IsAutoConvertMd5' : new FormControl(true),

    })

  }

  onSubmit(){
    this.validate();
    // console.log(this.signupForm.value)



  }
  createAccount (){
    this.http.post('https://51.89.42.197/api/Account/AddNewAccount',this.signupForm.value).subscribe(res=>{
      this.signupForm.reset();
      alert('Account Created :)')
    },error=>{
      this.signupForm.reset();
      console.log(error)
      alert('Account is Exist')
    })
  }
  validate(){
    if((this.accountId === '' || this.accountId === undefined) || (this.password === '' || this.password === undefined)){
      alert('Username or Password is required')
    }
    else {
      this.createAccount();
    }
  }

}


