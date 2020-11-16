import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { homeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [CommonModule, homeRoutingModule],
  declarations: [HomeComponent],
})
export class homeModule {}
