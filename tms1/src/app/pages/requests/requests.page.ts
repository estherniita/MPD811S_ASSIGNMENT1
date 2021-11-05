import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { MainService } from 'src/app/services/main.service';

import 'firebase/storage';

import { Plugins } from '@capacitor/core';

const { Network, Storage } = Plugins;


@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {
  userdata = [];

  constructor(
    private main: MainService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {

  }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.userdata = [];
    
    const loading = await this.loadingCtrl.create({
      message: 'Loading',
      spinner: 'crescent'
    });

    const status = await Network.getStatus();

    Storage.get({ key: 'user' })
      .then(async (resdata: any) => {
        if (status.connected) {
          await loading.present();
          this.main.getRequests()
            .subscribe(res => {
              const userdata = JSON.parse(resdata.value);
              if (res.length > 0) {
                res.forEach((val: any) => {
                  if (userdata.uid === val.uid) {
                    const data = {
                      destination: val.destination,
                      attented: false,
                      date: new Date().toLocaleString('en-GB'),
                      uid: val.uid,
                      driver: val.id,
                      driverName: val.driverName
                    };
                    this.userdata.push(data);
                  }
                });

                loading.dismiss();
              }
            }, async () => {
              const toast = await this.toastCtrl.create({
                message: 'Something went wrong. Please try again alter',
                duration: 3000
              });

              await toast.present();
            })
        } else {
          const toast = await this.toastCtrl.create({
            message: 'No internet connection. Make sure you are connected to the internet to proceed.',
            duration: 3000
          });
          await toast.present();
        }
      })
      .catch(async () => {
        const toast = await this.toastCtrl.create({
          message: 'Something went wrong. Please try again alter',
          duration: 3000
        });

        await toast.present();
      })


  }
}
