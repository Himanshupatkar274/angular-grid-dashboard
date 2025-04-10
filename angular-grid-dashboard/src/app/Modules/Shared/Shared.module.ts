import { NgModule } from "@angular/core";
import { MatModule } from "../../Base/Mat.module";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UnderDevelopmentComponent } from "./components/under-development/under-development.component";

const SHARED_MODULE = [
    CommonModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    UnderDevelopmentComponent
  ]

@NgModule({
    imports: [SHARED_MODULE],
    exports: [SHARED_MODULE],
    declarations: [],
    providers: [],
    bootstrap: []
})

export class SharedModule { }