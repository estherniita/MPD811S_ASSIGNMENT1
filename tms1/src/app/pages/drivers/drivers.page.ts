import { Component, OnInit } from '@angular/core';
import { AlertController, IonFab, LoadingController, ToastController } from '@ionic/angular';
import { MainService } from 'src/app/services/main.service';

import 'firebase/storage';

import { Plugins } from '@capacitor/core';

const { Network, Storage } = Plugins;

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.page.html',
  styleUrls: ['./drivers.page.scss'],
})
export class DriversPage implements OnInit {
  seletect: boolean;
  driverData: any;
  drivers = [];

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private mainService: MainService
  ) { }

  ngOnInit() {

  }

  async ionViewWillEnter() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading data',
      spinner: 'crescent'
    });

    const status = await Network.getStatus();

    if (status.connected) {
      await loading.present();

      this.getDrivers();
    } else {
      const toast = await this.toastCtrl.create({
        message: 'No internet connection. Make sure you are connected to the internet to proceed.',
        duration: 3000
      });

      await toast.present();
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
            });

            // getting control over the loading controller
            this.loadingCtrl.getTop()
              .then(res => {
                if (res) {
                  res.dismiss();
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
}