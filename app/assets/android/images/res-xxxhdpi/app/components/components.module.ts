import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorymenuComponent } from 'src/app/components/categorymenu/categorymenu.component';
import { IonicModule } from '@ionic/angular';
import { FooditemComponent } from 'src/app/components/fooditem/fooditem.component';
import { LoginalertComponent } from 'src/app/components/loginalert/loginalert.component';
import { AdminmenuComponent } from 'src/app/components/adminmenu/adminmenu.component';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { RestaurantreviewComponent } from 'src/app/components/restaurantreview/restaurantreview.component';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { ProductsreviewComponent } from 'src/app/components/productsreview/productsreview.component';
import { PasswordComponent } from 'src/app/components/password/password.component';
import { LanguageComponent } from 'src/app/components/language/language.component';
import { AddcategorymodalComponent } from 'src/app/components/addcategorymodal/addcategorymodal.component';
import { ListviewComponent } from 'src/app/components/listview/listview.component';

@NgModule({
  declarations: [
    CategorymenuComponent,
    FooditemComponent, 
    LoginalertComponent, 
    AdminmenuComponent,
    CategoriesComponent,
    ProductsComponent,
    RestaurantreviewComponent,
    ProductsreviewComponent,
    PasswordComponent,
    LanguageComponent,
    AddcategorymodalComponent,
    ListviewComponent,
  ],
  entryComponents:[
    AddcategorymodalComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CategorymenuComponent, 
    FooditemComponent, 
    LoginalertComponent, 
    AdminmenuComponent,
    CategoriesComponent,
    ProductsComponent,
    RestaurantreviewComponent,
    ProductsreviewComponent,
    PasswordComponent,
    LanguageComponent,
    AddcategorymodalComponent,
    ListviewComponent,
  ]
})
export class ComponentsModule { }
