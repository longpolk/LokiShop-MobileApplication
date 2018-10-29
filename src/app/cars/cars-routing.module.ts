import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

//import { CarDetailEditComponent } from "~/app/cars/car-detail-edit/car-detail-edit.component";
import { CarDetailComponent } from "~/app/cars/car-detail/car-detail.component";
import { ProductListComponent } from "~/app/cars/car-list.component";

const routes: Routes = [
    { path: "", component: ProductListComponent },
    { path: "car-detail/:id", component: CarDetailComponent }
    //,{ path: "car-detail-edit/:id", component: CarDetailEditComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CarsRoutingModule { }
