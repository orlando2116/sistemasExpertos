import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

//modules
import { NavbarModule } from './modules/navbar/navbar.module';
import { LoginModule } from './modules/login/login.module';
import { PurchaseOrderModule } from './modules/purchase-order/purchase-order.module';
import { AceptedModule } from './modules/acepted/acepted.module';

/*shared*/
import { OpcionesHttp } from './services/shared/opciones-http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PurchaseOrderModule,
    FormsModule,
    HttpClientModule,HttpModule,
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    LoginModule,
    AceptedModule
  ],
  providers: [
    { provide: 'IOpcionesHttp', useClass: OpcionesHttp }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
