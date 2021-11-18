import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent {
  @Input() newprop?: number;
  @Output() passingIdDataEvent = new EventEmitter<number>();
  constructor() {}
  

  sendSecreteId() {
    this.passingIdDataEvent.emit(this.newprop);
  }
}
