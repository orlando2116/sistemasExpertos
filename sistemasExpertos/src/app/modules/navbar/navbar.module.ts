import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from '../../components/navbar/navbar.component';

//material
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    MaterialModule
  ],
  exports:[NavbarComponent]
})
export class NavbarModule { }
