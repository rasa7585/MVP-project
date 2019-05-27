import { Component, OnInit } from '@angular/core';
import { AceService } from 'src/app/services/ace.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.scss'],
})
export class FooditemComponent {

  foodList: any;
  foodCount: any;
  categoryName: String = "all";

  constructor(
    private aceServic: AceService,
  ) { }

  ngOnInit() {
    this.getFood('all');
  }

  getFood(category){
    this.categoryName = category;
    // alert(this.categoryName);
    if(category == 'all'){
      this.aceServic.getData('products/all').subscribe(data=>{
        this.foodList = data;
        console.log();
        // this.foodCount = data.length;
      });
    }else{
       this.aceServic.getData(`products/getByCategory/${category}`).subscribe(data=>{
        this.foodList = data;
        console.log(data);
        // this.router.navigateByUrl('home');
      });
    }
    
  }

  showDetails(id){
    // alert(id);
  }



}
