import { Component } from "@angular/core";
@Component({
    selector: "ns-about",
    templateUrl: "./about.component.html"
})

export class AboutComponent {

    sayHi() {
        alert("Hi by about controller");
    }
 }
