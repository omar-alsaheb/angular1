import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
// import { CustomValidators } from './custome-validators';
@Component({
  selector: 'app-omar',
  templateUrl: './omar.component.html',
  styleUrls: ['./omar.component.css'],
})
export class OmarComponent implements OnInit, OnDestroy {
  subsciption: Subscription;
  signupForm: FormGroup = new FormGroup({
    Account_ID: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    Password: new FormControl(null, [Validators.required]),
    IsMd5Password: new FormControl(false),
    IsAutoConvertMd5: new FormControl(true),
  });
  constructor(public http: HttpClient) {}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
  }


  createAccount() {
    if (this.signupForm.invalid) {
      alert('UserName or password is empty');
    } else {
      this.http
        .post('https://51.89.42.197/api/Account/AddNewAccount', {
          ...this.signupForm.value,
          IsMd5Password: false,
          IsAutoConvertMd5: true,
        })
        .subscribe(
          (res: any) => {
            this.signupForm.reset();
            if (res.error) {
              // console.log(res);
              alert(res.error);
            } else {
              alert('Account Created Successfully');
            }
          },
          (error) => {
            this.signupForm.reset();
            console.log(error);
          }
        );
    }
  }
}
