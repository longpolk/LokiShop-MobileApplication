import { Component, OnInit } from "@angular/core";
import { ProductService } from "~/app/service/product.service";
import { RouterExtensions } from "nativescript-angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { Subscription } from "rxjs";
import { Product } from "~/app/model/product.model";
import { finalize } from "rxjs/operators";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "home", loadChildren: "./home/home.module#HomeModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    private _isLoading: boolean = false;
    private _products: ObservableArray<Product> = new ObservableArray<Product>([]);
    private _dataSubscription: Subscription;
    
    constructor(
        private _productService: ProductService,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        if (!this._dataSubscription) {
            this._isLoading = true;

            this._dataSubscription = this._productService.load()
                .pipe(finalize(() => this._isLoading = false))
                .subscribe((products: Array<Product>) => {
                    this._products = new ObservableArray(products);
                    this._isLoading = false;
                    console.log(products);
                });
        }
    }

    ngOnDestroy(): void {
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
    }
    get products(): ObservableArray<Product> {
        return this._products;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }
}
