import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login.component";
import { loginRoutingModule } from "./login-routing.module";

@NgModule({
  imports: [CommonModule, loginRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [LoginComponent],
})
export class loginModule {}
