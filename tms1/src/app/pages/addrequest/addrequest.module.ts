import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddrequestPageRoutingModule } from './addrequest-routing.module';

import { AddrequestPage } from './addrequest.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddrequestPageRoutingModule
  ],
  declarations: [AddrequestPage]
})
export class AddrequestPageModule {}
