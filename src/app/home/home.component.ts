import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prodService: any;
  latestProducts: any;

  constructor() { }

  ngOnInit(): void {
  }

//   getLatestProducts() {
//     this.prodService.getProducts().subscribe(
//       productData => {
//       for (const key in productData) {
//         this.latestProducts.push({...productData[key], id: key });
//       }
//     },
//   );
// };
}
