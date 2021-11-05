import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController, Platform, AlertController, LoadingController, NavController } from '@ionic/angular';
import { MustMatch } from './pwd.match';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import 'firebase/storage';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',  
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  //local variables
  signupForm: FormGroup;
  submitted: boolean;
  backbutton: Subscription;

  customAlertOptions: any = {
    header: 'Select',
    // subHeader: 'Select your one',
    translucent: true
  };

  user: boolean = true;
  shop: boolean;

  imageToDisplay: string;
  imagedata: { blob: boolean; content: Blob; };
  hasImage: boolean;

  constructor(
    private authService: AuthService,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private platform: Platform,
    private router: Router,
    private mainService: MainService
  ) {

    this.signupForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      pwd1: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern(/\d/), Validators.pattern(/[A-Z]/)])),
      pwd2: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern(/\d/), Validators.pattern(/[A-Z]/)])),
    }, { validator: MustMatch('pwd1', 'pwd2') });
  }

  ngOnInit() {

  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }


  ionViewWillEnter(): void {
    if (this.router.url === '/signup') {
      this.backbutton = this.platform.backButton.subscribe(async () => {
        this.router.navigate(['/login']);
      });
    }
  }

  //show toast 
  async showToast(msg: string) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
    });

    await toast.present();
  }

  // get user type
  userType(event) {
    if (event.detail.value === 'shop') {
      this.user = false;
      this.shop = true;
    } else if (event.detail.value === 'user') {
      this.shop = false;
      this.user = true;
    }
  }


  //loging methed
  signup() {
    this.submitted = true;
    // trimming the email address so that the validation may be well addressed
    this.signupForm.value.email.trim().toLowerCase();

    if (this.signupForm.valid) {
      const data = {
        email: this.signupForm.value.email.trim(),
        pwd: this.signupForm.value.pwd2,
        displayName: this.signupForm.value.dpName,
      }
      this.authService.signup(data)
    }
  }
  //sign in with google
  // signinWithGoogle() {
  //   this.authService.signInWithGoogle();
  // }

  ionViewWillLeave() {
    this.backbutton.unsubscribe();
  }
}
