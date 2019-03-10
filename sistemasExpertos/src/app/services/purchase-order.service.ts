import { Injectable, Inject } from '@angular/core';

import { map } from 'rxjs/operators';

import { Http } from '@angular/http';
import { environment } from '../../environments/environment';


//interfaces
import { IOpcionesHttp } from '../interfaces/iopciones-http';


@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  private _url = environment.apiUrl ;

  constructor(@Inject('IOpcionesHttp') private _opcionesHttp: IOpcionesHttp,
    private _http: Http) { }

  get(page:number){
    return this._http
    .get(`${this._url}api/v1/document/?page=${page}`,this._opcionesHttp.getOptions()).pipe(
      map(res => {
        return { ok: res.ok, code: res.status, message: res.json() };
      }))    
  }
  getByCode(code:string){
    return this._http
    .get(`${this._url}api/v1/movements?search=${code}`,this._opcionesHttp.getOptions()).pipe(
      map(res => {
        return { ok: res.ok, code: res.status, message: res.json() };
      }))   
  }
}
