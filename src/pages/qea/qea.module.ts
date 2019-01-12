import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QeaPageComponent } from './qea';

@NgModule({
  declarations: [
    QeaPageComponent,
  ],
  imports: [
    IonicPageModule.forChild(QeaPageComponent),
  ],
})
export class QeaPageModule {}
