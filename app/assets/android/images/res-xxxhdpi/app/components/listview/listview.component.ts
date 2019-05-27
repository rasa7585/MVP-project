import { Component, OnInit } from '@angular/core';
import { AceService } from 'src/app/services/ace.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss'],
})
export class ListviewComponent implements OnInit {

  foodList: any;
  foodCount: any;
  constructor(public aceServic: AceService) { }

  ngOnInit() {
    this.aceServic.getData('products/all').subscribe(data=>{
      this.foodList = data;
      // alert();
      // console.log(data.length);
      // this.foodCount = data.length;
      // console.log(this.foodCount);
    });
  }

}
