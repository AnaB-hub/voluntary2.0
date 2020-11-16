import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { homeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ModalConfimacaoComponent } from "../modal-confimacao/modal-confimacao.component";

@NgModule({
  imports: [CommonModule, homeRoutingModule],
  declarations: [HomeComponent, ModalConfimacaoComponent],
})
export class homeModule {}
