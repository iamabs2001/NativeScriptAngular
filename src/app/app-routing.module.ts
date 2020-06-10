import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { TestComponent } from "./test/test.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
    { path: "", redirectTo: "/test", pathMatch: "full" },
    { path: "test", component: TestComponent },
    { path: "about", component: AboutComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

