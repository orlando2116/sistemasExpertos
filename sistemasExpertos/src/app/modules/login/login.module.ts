import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from '../../components/login/login.component';

//material
import { MaterialModule } from '../shared/material.module';

//services
import { LoginService } from '../../services/login.service';
import { TokenService } from '../../services/shared/token.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    MaterialModule,
    CommonModule,
    LoginRoutingModule
  ],
  providers:[
    LoginService,
    TokenService]
})
export class LoginModule { }
