import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Plugins } from '@capacitor/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

const { Network } = Plugins;



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
loginForm: FormGroup;
pwdType = "password";
pwdIcon = "eye-off";
password_icon = "";
  submitted: boolean;
  constructor(
    private auth: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    
  ) { 
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }

  showHidePWD() {
    this.pwdType = this.pwdType === "text" ? "password" : "text";

    this.pwdIcon = this.pwdIcon === "eye-off" ? "eye" : "eye-off";
  }

  // login method
  async login() {
    // getting internet status
    const status = await Network.getStatus();
    this.submitted = true;
    if(this.loginForm.valid) {
      if(status.connected) {
        // login here
        this.auth.login(this.loginForm.value.email, this.loginForm.value.password);
      }else {
        const toast = await this.toastCtrl.create({
          message: 'Cannot proceed. No internet connection, please enable and try again.',
          duration: 4000
        });

        await toast.present();
      }
    }
  }

}
