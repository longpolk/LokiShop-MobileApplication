/*import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { alert } from "tns-core-modules/ui/dialogs/dialogs";

import {  } from "../../service/product-edit.service";
import { Product } from "../../model/product.model";
import { ProductService } from "../../service/product.service";
import { ProductEditService } from "../../service/product-edit.service";
import { carClassList, carDoorList, carSeatList, carTransmissionList } from "~/app/cars/car-detail-edit/constants";

@Component({
    moduleId: module.id,
    selector: "CarDetailEdit",
    templateUrl: "./car-detail-edit.component.html",
    styleUrls: ["./car-detail-edit.component.scss"]
})
export class CarDetailEditComponent implements OnInit {
    private _product: Product;
    private _productClassOptions: Array<string> = [];
    private _productDoorOptions: Array<number> = [];
    private _productSeatOptions: Array<string> = [];
    private _productTransmissionOptions: Array<string> = [];
    private _isCarImageDirty: boolean = false;
    private _isUpdating: boolean = false;

    constructor(
        private _productService: ProductService,
        private _productEditService: ProductEditService,
        private _pageRoute: PageRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.initializeEditOptions();

        this._pageRoute.activatedRoute
            .pipe(switchMap((activatedRoute) => activatedRoute.params))
            .forEach((params) => {
                const carId = params.id;

                this._product = this._productEditService.startEdit(carId);
            });
    }

    get isUpdating(): boolean {
        return this._isUpdating;
    }

    get car(): Product {
        return this._product;
    }

    get pricePerDay(): number {
        return this._product.price;
    }

    set pricePerDay(value: number) {
        // force iOS UISlider to work with discrete steps
        this._product.price = Math.round(value);
    }

    get luggageValue(): number {
        return this._product.luggage;
    }

    set luggageValue(value: number) {
        // force iOS UISlider to work with discrete steps
        this._product.luggage = Math.round(value);
    }

    get carClassOptions(): Array<string> {
        return this._productClassOptions;
    }

    get carDoorOptions(): Array<number> {
        return this._productDoorOptions;
    }

    get carSeatOptions(): Array<string> {
        return this._productSeatOptions;
    }

    get carTransmissionOptions(): Array<string> {
        return this._productTransmissionOptions;
    }

    get carImageUrl(): string {
        return this._product.imageUrl;
    }

    set carImageUrl(value: string) {
        this._product.imageUrl = value;
        this._isCarImageDirty = true;
    }

    onCancelButtonTap(): void {
        this._routerExtensions.backToPreviousPage();
    }

    onDoneButtonTap(): void {
        /* ***********************************************************
        * By design this app is set up to work with read-only sample data.
        * Follow the steps in the "Firebase database setup" section in app/readme.md file
        * and uncomment the code block below to make it editable.
        *************************************************************/

        /* ***********************************************************
        let queue = Promise.resolve();

        this._isUpdating = true;

        if (this._isCarImageDirty && this._product.imageUrl) {
            queue = queue
                .then(() => this._productService.uploadImage(this._product.imageStoragePath, this._product.imageUrl))
                .then((uploadedFile: any) => {
                    this._product.imageUrl = uploadedFile.url;
                });
        }

        queue.then(() => this._productService.update(this._product))
            .then(() => {
                this._isUpdating = false;
                this._routerExtensions.navigate(["/cars"], {
                    clearHistory: true,
                    animated: true,
                    transition: {
                        name: "slideBottom",
                        duration: 200,
                        curve: "ease"
                    }
                });
            })
            .catch((errorMessage: any) => {
                this._isUpdating = false;
                alert({ title: "Oops!", message: "Something went wrong. Please try again.", okButtonText: "Ok" });
            });
        *************************************************************/

        /* ***********************************************************
        * Comment out the code block below if you made the app editable.
        *************************************************************/
       /*
        const readOnlyMessage = "Check out the \"Firebase database setup\" section in the readme file to make it editable."; // tslint:disable-line:max-line-length
        const queue = Promise.resolve();
        queue.then(() => alert({ title: "Read-Only Template!", message: readOnlyMessage, okButtonText: "Ok" }))
            .then(() => this._routerExtensions.navigate(["/cars"], {
                clearHistory: true,
                animated: true,
                transition: {
                    name: "slideBottom",
                    duration: 200,
                    curve: "ease"
                }
            }));
    }

    private initializeEditOptions(): void {
        for (const classItem of carClassList) {
            this._productClassOptions.push(classItem);
        }

        for (const doorItem of carDoorList) {
            this._productDoorOptions.push(doorItem);
        }

        for (const seatItem of carSeatList) {
            this._productSeatOptions.push(seatItem);
        }

        for (const transmissionItem of carTransmissionList) {
            this._productTransmissionOptions.push(transmissionItem);
        }
    }
}
*/