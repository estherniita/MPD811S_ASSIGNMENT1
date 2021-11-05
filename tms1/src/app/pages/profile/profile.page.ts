import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Plugins } from '@capacitor/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { MainService } from 'src/app/services/main.service';

const { Storage, Network } = Plugins;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any;
  constructor(
    private auth: AuthService,
    private loadingCtrl: LoadingController,
    private mainService: MainService
  ) { }

  async ngOnInit() {

    const loading = await this.loadingCtrl.create({
      message: 'Getting your data',
      spinner: 'crescent'
    });

    await loading.present();

    // get user data
    const value: any = await Storage.get({ key: 'user' });
    const user: any = JSON.parse(value.value);
    this.user = user.user;
    loading.dismiss();
    
  }


  async logout() {
    const loading = await this.loadingCtrl.create({
      message: 'Processing',
      spinner: 'bubbles'
    });

    await loading.present();
    this.auth.signout()
      .then(() => loading.dismiss());

  }

  changePic() {
    // perform here logic to add image to firebase storage
  }
}
