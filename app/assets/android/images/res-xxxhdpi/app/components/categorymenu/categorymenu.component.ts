import { Component, OnInit } from '@angular/core';
import { AceService } from 'src/app/services/ace.service';
import { FooditemComponent } from 'src/app/components/fooditem/fooditem.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorymenu',
  templateUrl: './categorymenu.component.html',
  styleUrls: ['./categorymenu.component.scss'],
})
export class CategorymenuComponent implements OnInit {

  categoryList: any;
 
  constructor(private aceServic: AceService, private router: Router) { }
  foodItem = new FooditemComponent(this.aceServic);
  ngOnInit() {
    this.getMenu();
  }

  getMenu(){
    this.aceServic.getData('categories/all').subscribe(data=>{
      this.categoryList = data;
    });
  }

  showItemByCategory(category){
    // this.router.navigateByUrl('home');
    this.foodItem.categoryName = category;
    this.foodItem.getFood(category);
  }

}
