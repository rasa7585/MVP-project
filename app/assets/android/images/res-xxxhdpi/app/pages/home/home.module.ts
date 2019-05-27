import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomePage } from 'src/app/pages/home/home.page';
import { IonicStorageModule } from '@ionic/storage';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome/fontawesome.module';


@NgModule({
  imports: [ 
    MbscModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    IonicStorageModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
