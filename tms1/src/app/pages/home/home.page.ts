import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private alertCtrl: AlertController,
    private actionCtrl: ActionSheetController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private main: MainService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }


  async openAction() {
    const action = await this.actionCtrl.create({
      header: 'Options',
      buttons: [{
        text: 'My Requestes',
        icon: 'list',
        handler: () => {
          this.router.navigate(['/requests']);
        }
      }, {
        text: 'Profile',
        icon: 'person',
        handler: () => {
          this.router.navigate(['/profile']);
        }
      }, {
        text: 'Find Drivers',
        icon: 'list',
        handler: () => {
          this.router.navigate(['/drivers']);
        }
      }, {
        text: 'Logout',
        icon: 'log-out',
        handler: async () => {
          const alert = await this.alertCtrl.create({
            header: 'Confirmation',
            message: 'Are you sure you want to logou?',
            buttons: [{
              text: 'Cancel',
              role: 'cancel'
            }, {
              text: 'Yes',
              handler: async () => {
                const loading = await this.loadingCtrl.create({
                  message: 'Processing',
                  spinner: 'circular'
                })

                await loading.present();
                setTimeout(() => {
                  loading.dismiss();
                  this.auth.signout();
                }, 2000);
              }
            }]
          });

          await alert.present();
        }
      }, {
        text: 'Close',
        icon: 'close',
        role: 'cancel'
      }]
    });

    await action.present();
  }
}
