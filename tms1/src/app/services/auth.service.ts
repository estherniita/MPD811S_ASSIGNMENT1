import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

import 'firebase/firestore';
import 'firebase/auth';

export interface user {
  email: string,
  dateCreate: string,
  driver: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userCollection: AngularFirestoreCollection<user>;

  signinEithGoogle: boolean;

  constructor(private router: Router,
    private auth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    // private gPlus: GooglePlus,
    private afs: AngularFirestore,
    private navCtrl: NavController,
  ) {

    //creating a reference to the devices collection
    this.userCollection = this.afs.collection<user>('users');
  }


  // is logged in
  public async isLoggedIn() {
    const value = await Storage.get({ key: 'user' });
    const user = JSON.parse(value.value);
    return user.user.loggedIn !== false;
  }

  // get user's data
  getUserData(id: string) {
    return this.userCollection.doc(id).valueChanges();
  }


  //function to login a user
  async login(email: any, pwd: any) {

    const loading = await this.loadingCtrl.create({
      message: 'Authenticating',
      spinner: 'dots'
    });

    await loading.present();

    // sign the user in with email and password
    await this.auth.signInWithEmailAndPassword(email, pwd)
      .then(async (res: any) => {
        this.getUserData(res.user.uid)
          .subscribe(async user => {
            console.log(user);
            await Storage.set({
              key: 'user',
              value: JSON.stringify({
                loggedIn: true,
                uid: res.user.uid,
                user: user
              })
            }).then(() => {
              loading.dismiss();
              this.navCtrl.navigateRoot('/home');
              // unsubscribing from users values
            });
          })
      })
      .catch(async e => {
        // switch on the error code
        switch (e.code) {
          case 'auth/wrong-password': {
            //dismissng the loading first
            this.loadingCtrl.dismiss();
            // console.log(e)
            this.showAlert('You have entered a wrong password, enter the correct password');
            break;
          }
          case 'auth/user-not-found': {
            //dismissng the loading first
            this.loadingCtrl.dismiss();

            const alert = await this.alertCtrl.create({
              message: 'No account was found corresponsing to the email you entered',
              buttons: [
                {
                  text: 'Re-enter email',
                  role: 'cancel'
                },
                {
                  text: 'Signup',
                  handler: () => {
                    this.router.navigate(['/signup']);
                  }
                }
              ]
            });

            alert.backdropDismiss = false;
            return await alert.present();

            break;
          }
        }

      });

  }

  //show alert message
  async showAlert(msg) {
    const alert = await this.alertCtrl.create({
      message: msg,
      buttons: ["ok"]
    });
    await alert.present();
  };

  //show alert message
  async showAlertNav(msg) {
    const alert = await this.alertCtrl.create({
      message: msg,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.navCtrl.navigateRoot(['/login'])
          }
        }
      ]
    });
    await alert.present();
  };


  //method to show the loading 
  async showLoading() {
    let loading = await this.loadingCtrl.create({
      message: 'Processing request...',
      duration: 3000,
      spinner: 'crescent',
    });

    await loading.present();
  }

  //function to signup a user
  async signup(data) {
    // if (this.mainService.connected) {
    //showloading from the main service
    const loading = await this.loadingCtrl.create({
      message: 'Creating account',
      spinner: 'crescent'
    });

    await loading.present();

    await this.auth.createUserWithEmailAndPassword(data.email, data.pwd)
      .then(async user => {
        if (user) {
          //dismissng the loading first
          loading.dismiss();

          this.showAlertNav('Your account was successfully created, please use the credentials to login');

          // user profile object
          const userdata: user = {
            email: user.user.email,
            dateCreate: new Date().toLocaleString(),
            driver: false
          };

          // creating the user prifile 
          return await this.userCollection.doc(user.user.uid).set(userdata)
            .then(async res => {
              loading.dismiss();
              this.navCtrl.navigateRoot(['/login']);
            })
            .catch(e => { });
        }
      })
      .catch(e => {
        //dismissng the loading first
        loading.dismiss();
        this.showAlert(e.message);
      });
    // } else {
    //   let msg = 'Please make sure your phone is connected, and try again';
    //   this.mainService.showAlert(msg);
    // }

  }

  // creat shop
  async createShop(email, pwd) {
    return this.auth.createUserWithEmailAndPassword(email, pwd);
  }

  //function to singou the user
  async signout() {
    this.auth.signOut()
      .then(async res => {
        await Storage.remove({ key: 'user' }).then(() => {
          this.navCtrl.navigateRoot(['/login']);
        });
      });
  }
}
