import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-omar',
  templateUrl: './omar.component.html',
  styleUrls: ['./omar.component.css'],
})
export class OmarComponent implements OnInit, OnDestroy {
  subsciption: Subscription;
  hide = true;
  signupForm: FormGroup = new FormGroup({
    Account_ID: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
    Password: new FormControl(null, [Validators.required]),
    IsMd5Password: new FormControl(false),
    IsAutoConvertMd5: new FormControl(true),
  });
  localApi="https://localhost:44337";
  globalApi="api.thelostparadise.club";
  constructor(public http: HttpClient, public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
  
  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
  }

  createAccount() {
    if (this.signupForm.invalid) {
      alert('UserName or password is empty');
    } else {
      this.http
        .post(this.globalApi+'/api/Account/AddNewAccount', {
          ...this.signupForm.value,
          IsMd5Password: false,
          IsAutoConvertMd5: true,
        })
        .subscribe(
          (res: any) => {
            // this.messages = res.error;
            this.signupForm.reset();
            if (res.error) {
              // console.log(res);
              alert(res.error);
            } else {
              // alert('Account Created Successfully');
              this.dialog.open(DialogElementsExampleDialog);
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
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {
   messages: string;
}
