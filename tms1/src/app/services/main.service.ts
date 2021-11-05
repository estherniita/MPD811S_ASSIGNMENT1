import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { map, retry } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthService } from './auth.service';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

//interfaces

// user
export interface user {
  dateCreate: string;
  email: string;
}

// user
export interface requests {
  dateCreate: string;
  uid: string;
  destination: string;
  driver: string;
  attended: boolean;
  driverName: string;
}

@Injectable({
  providedIn: 'root'
})


export class MainService {
  private userCollection: AngularFirestoreCollection<user>
  private requestsCollection: AngularFirestoreCollection<requests>

  constructor(
    private aFirestore: AngularFirestore,
    private afStorage: AngularFireStorage,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private navCtrl: NavController
  ) {
    this.userCollection = this.aFirestore.collection<user>('users');
    this.requestsCollection = this.aFirestore.collection<requests>('requests');
  }

  //get all oders by shop id
  getOrdersByShopId(id: string) {
    return this.aFirestore.collection('orders', ref => ref.where('shopId', '==', id))
      .valueChanges();
  }

  //get all oders by user id
  getOrdersByUserId(id: string) {
    return this.aFirestore.collection('orders', ref => ref.where('shopId', '==', id))
      .valueChanges();
  }

  // get user's data
  getUserData(id: string) {
    return this.userCollection.doc(id).valueChanges();
  }

  
  // method to get products
  getUsers() {
    return this.userCollection
      .snapshotChanges()
      .pipe(retry(3),
        map(res => {
          return res.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data }
          })
        }))
  }

  // method to get products
  getRequests() {
    return this.requestsCollection
      .snapshotChanges()
      .pipe(retry(3),
        map(res => {
          return res.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data }
          })
        }))
  }

  // follow
  addRequest(data) {
    return this.requestsCollection.add(data)
  }

  saveRequest(data) {
    return this.userCollection.doc(data.uid)
    .collection('requests')
    .add(data.data)
  }

  // follow
  deleteRequest(data) {
    return this.userCollection.doc(data.uid)
      .collection('requests')
      .doc(data.reqId)
      .delete();
  }

}
