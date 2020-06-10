import { Component, Injector } from "@angular/core";
import { AboutComponent } from "../about/about.component";
@Component({
    selector: "ns-test",
    templateUrl: "./test.component.html"
})

export class TestComponent {
    constructor(private Injector : Injector) {

    }
    mycomp = this.Injector.get(AboutComponent);

    msg() {
        this.mycomp.sayHi();
    }
 }
