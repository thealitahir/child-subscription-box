import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { SubscribeComponent } from './subscribe.page';
import { SubscribePageRoutingModule } from './subscribe-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SubscribePageRoutingModule],
  declarations: [SubscribeComponent],
})
export class SubscribePageModule {}
