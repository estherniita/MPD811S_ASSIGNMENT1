import { Component } from '@angular/core';

import { NavController, ToastController } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
// import { FcmService } from './services/fcm.service';
import { Capacitor, Plugins } from '@capacitor/core';

const { Storage } = Plugins;
const { SplashScreen } = Plugins;
const { StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  showSpinner: boolean = true;

  constructor(
    private toastCtrl: ToastController,
    private router: Router,
    private screenOrientation: ScreenOrientation,
    // private fcmService: FcmService
    private navCtrl: NavController,
  ) {
    this.initializeApp();
  }

  initializeApp() {

    this.checkUser();

    if (Capacitor.isNative) {
      // Tint statusbarÎ color
      StatusBar.setBackgroundColor({
        color: '#111619'
      });
      

      // set to portrait
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

         // Show the splash for two seconds and then auto hide:
         SplashScreen.show({
          showDuration: 3000,
          autoHide: true
        });
    }
  }


  async checkUser() {
    const value = await Storage.get({ key: 'user' });
    const data = JSON.parse(value.value);
    if (data !== null) {
      switch (data.loggedIn) {
        case true: {
          if(data.uid === 'MQ9SRkXflwWBQJgXXltGU7AGTki2' || data.user.usertype === 'shop') {
            this.navCtrl.navigateRoot('/users');
          }else {
            this.navCtrl.navigateRoot('/shop');
          }
          break;
        } case false: {
          this.router.navigate(['/login']);
          break;
        }
      }
    }else this.router.navigate(['/login']);
  }

  //listen to incoming messages
  // getMessages() {
  //   this.authService.listenNotifactions()
  //     .pipe(map(msg => {
  //       this.showToast(msg);
  //     })).subscribe();

  // }

  //show toast method
  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 4000
    });

    await toast.present();
  }
}
