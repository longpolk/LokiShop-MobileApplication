import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";

//import { CarDetailEditComponent } from "~/app/cars/car-detail-edit/car-detail-edit.component";
import { MyImageAddRemoveComponent } from "~/app/cars/car-detail-edit/my-image-add-remove/my-image-add-remove.component";
//import { MyListSelectorModalViewComponent } from "~/app/cars/car-detail-edit/my-list-selector/my-list-selector-modal-view.component"; // tslint:disable-line:max-line-length
//import { MyListSelectorComponent } from "~/app/cars/car-detail-edit/my-list-selector/my-list-selector.component";
import { CarDetailComponent } from "~/app/cars/car-detail/car-detail.component";
import { ProductListComponent } from "~/app/cars/car-list.component";
import { CarsRoutingModule } from "~/app/cars/cars-routing.module";
//import { ProductEditService } from "../service/product-edit.service";
import { ProductService } from "../service/product.service";

@NgModule({
    imports: [
        CarsRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        ProductListComponent,
        CarDetailComponent,
        //CarDetailEditComponent,
        //MyListSelectorComponent,
        //MyListSelectorModalViewComponent,
        MyImageAddRemoveComponent
    ],
    entryComponents: [
        //MyListSelectorModalViewComponent
    ],
    providers: [
        ProductService,
        //ProductEditService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CarsModule { }
