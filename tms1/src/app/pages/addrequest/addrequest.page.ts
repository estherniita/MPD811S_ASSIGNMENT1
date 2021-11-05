import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController, Platform, AlertController, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import 'firebase/storage';

import { Plugins } from '@capacitor/core';

const { Network, Storage } = Plugins;

@Component({
  selector: 'app-addrequest',
  templateUrl: './addrequest.page.html',
  styleUrls: ['./addrequest.page.scss'],
})
export class AddrequestPage implements OnInit {
  //local variables
  requestForm: FormGroup;
  submitted: boolean;
  backbutton: Subscription;

  customAlertOptions: any = {
    header: 'Select',
    // subHeader: 'Select your one',
    translucent: true
  };

  user: any;
  shop: boolean;
  drivers = [];
  seletect: boolean;
  driverData: any;

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private platform: Platform,
    private router: Router,
    private mainService: MainService,
    private loadingCtrl: LoadingController
  ) {

    this.requestForm = this.formBuilder.group({
      destination: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {

  }

  // convenience getter for easy access to form fields
  get f() { return this.requestForm.controls; }


  async ionViewWillEnter() {
    this.drivers = [];
    
    this.getDrivers();

    Storage.get({ key: 'user' })
      .then(res => {
        this.user = JSON.parse(res.value);
      })
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

  getDrivers() {
    this.mainService.getUsers()
      .subscribe(res => {
        if (res) {
          if (res.length > 0) {
            this.drivers = [];
            res.forEach((resdata: any) => {
              if (resdata.driver) {
                // console.log(resdata)
                let userdata = {
                  years: resdata.years,
                  address: resdata.address,
                  name: resdata.name,
                  rate: resdata.rate,
                  id: resdata.id,
                  clicked: false
                };

                this.drivers.push(userdata);
              }
            })
          }
        }
      }, async () => {
        const toast = await this.toastCtrl.create({
          message: 'No internet connection. Make sure you are connected to the internet to proceed.',
          duration: 3000
        });

        await toast.present();
      });
  }

  // select driver
  selectDriver(i) {
      this.seletect = true;
      this.driverData = this.drivers[i];
      this.drivers[i].clicked = true;

      this.drivers.forEach((n, i) => {
        if (n.id !== this.driverData.id) {
          n.clicked = false;
        }
      });
  }


  //loging methed
  async post() {
    const status = await Network.getStatus();
    if (status.connected) {
      this.submitted = true;
      const loading = await this.loadingCtrl.create({
        message: 'Processing',
        spinner: 'circles'
      });

      if (this.requestForm.valid) {

        if (this.driverData) {

          await loading.present();
          // object data
          const data = {
            destination: this.requestForm.value.destination,
            attented: false,
            date: new Date().toLocaleString('en-GB'),
            uid: this.user.uid,
            driver: this.driverData.id,
            driverName: this.driverData.name
          }

          this.mainService.addRequest(data)
            .then(async () => {
              loading.dismiss();
              // creating alert for success notification
              const alert = await this.alertCtrl.create({
                header: 'Success Request',
                message: `Request with desctination to ${data.destination} was sent to driver ${data.driverName} with success`,
                buttons: ['Okay']
              });

              // presenting the alert
              await alert.present();

              this.router.navigate(['/requests']);
            })
            .catch(async () => {
              const toast = await this.toastCtrl.create({
                message: 'Something went wrong. Please try again alter',
                duration: 3000
              });

              await toast.present();
            })
        } else {
          // creating alert for success notification
          const alert = await this.alertCtrl.create({
            header: 'Information',
            message: `Kindly, select the driver on the list, in order to proceed, by clcking on the on of the list items on the page.`,
            buttons: ['Okay']
          });

          // presenting the alert
          await alert.present();
        }
      }
    } else {
      const toast = await this.toastCtrl.create({
        message: 'No internet connection. Make sure you are connected to the internet to proceed.',
        duration: 3000
      });
      await toast.present();
    }
  }
}