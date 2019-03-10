import { Injectable, Inject } from '@angular/core';

import { map } from 'rxjs/operators';

import { Http } from '@angular/http';
import { environment } from '../../environments/environment';


//interfaces
import { IService } from '../interfaces/iservice';
import { IOpcionesHttp } from '../interfaces/iopciones-http';

//models
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements IService{

  private _url = environment.apiUrl ;

  constructor(@Inject('IOpcionesHttp') private _opcionesHttp: IOpcionesHttp,
    private _http: Http) { }

  post(login:Login){
    return this._http
    .post(`${this._url}login/`,login,this._opcionesHttp.getOptionsBy()).pipe(
      map(res => {
        return { ok: res.ok, code: res.status, message: res.json() };
      }))    
  }

}
