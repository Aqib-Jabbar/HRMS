import {
  ComponentFactoryResolver,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { LoadComponent } from "./load/load.component";

@Directive({
  selector: "[appProgressBar]",
})
export class ProgressBarDirective {
  //   @Input()
  //     public set appProgressBar(data:any) {
  //         if (data) {
  //             this.viewContainer.clear();
  //             this.viewContainer.createEmbeddedView(this.templateRef);
  //         } else {
  //             this.viewContainer.clear();
  //             this.viewContainer.createComponent(this.componentFactoryResolver.resolveComponentFactory(LoadComponent));
  //         }
  //     }
  //     constructor(private templateRef: TemplateRef<any>,
  //         private viewContainer: ViewContainerRef,
  //         private componentFactoryResolver: ComponentFactoryResolver) {
  //     }
}
