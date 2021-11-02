import { Component, OnInit } from "@angular/core";
import { Logo } from "../core/mock/logo";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  constructor() {}

  links = Logo;
}
