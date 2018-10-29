import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { ProductService } from "~/app/service/product.service";

@NgModule({
    imports: [
        HomeRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        HomeComponent
    ],
    providers:[
        ProductService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
