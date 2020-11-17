export class Product {
    public title: string;
    public description: string;
    public imagePath: string;
    public price: string;
  ingredients: any;

    constructor(title: string, desc: string, imagePath: string, price: string) {
      this.title = title;
      this.description = desc;
      this.imagePath = imagePath;
      this.price = '';
    }
  }
