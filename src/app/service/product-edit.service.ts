import { Injectable } from "@angular/core";
import { ProductService } from "~/app/service/product.service";
import { Product } from "../model/product.model";

@Injectable()
export class ProductEditService {
    private _editModel: Product;

    constructor(private _productService: ProductService) {}

    startEdit(id: string): Product {
        this._editModel = null;

        return this.getEditableProductById(id);
    }

    getEditableProductById(id: string): Product {
        if (!this._editModel || this._editModel.id !== id) {
            const product = this._productService.getProductById(id);

            // get fresh editable copy of product model
            this._editModel = new Product(product);
        }

        return this._editModel;
    }
}
