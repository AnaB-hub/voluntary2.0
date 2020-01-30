import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { loginRoutingModule } from './login-routing.module';
import { AppModule } from 'src/app/app.module';

@NgModule({
  imports: [
    CommonModule,
    loginRoutingModule
  ],
  declarations: [LoginComponent]
})
export class loginModule { }
