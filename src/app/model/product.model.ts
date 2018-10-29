export class Product {
    brand: string;
    category_id: string;
    colors: Array<string>;
    id: string;
    imageUrl: Array<string>;
    inStock: number;
    name: string;
    postDate: string;
    price: number;
    sale_price: number;
    snippet: string;
    sold: number;
    thumb: string;
    added: boolean;
    qtyinCart: number;
    selectedColor: string;
    index: number;
    category: string;

    constructor(options: any) {
        this.id = options.id;
        this.name = options.name;
        this.brand = options.brand;
        this.category_id = options.category_id;
        this.colors = Array<string>(options.colors);
        this.inStock = Number(options.inStock);
        this.postDate = options.postDate;
        this.price = Number(options.price);
        this.sale_price = Number(options.sale_price);
        this.imageUrl = Array<string>(options.imageUrl);
        this.thumb = options.thumb;
        this.added = Boolean(options.added);
        this.snippet = options.snippet;
        this.qtyinCart = Number(options.qtyinCart);
        this.selectedColor = options.selectedColor;
        this.index = Number(options.index);
        this.category = options.category;
        this.sold = Number(options.sold);
    }
}
