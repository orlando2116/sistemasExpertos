import { Injectable, Inject } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { IOpcionesHttp } from '../../interfaces/iopciones-http';

import { TokenService } from '../../services/shared/token.service';



@Injectable()
export class OpcionesHttp implements IOpcionesHttp {


  constructor(private _tokenService:TokenService) {  
   }

   getOptions() {
    return new RequestOptions({
      headers: new Headers({     
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this._tokenService.token}`    
      })
    });
  }

  getOptionsBy() {   
    return new RequestOptions({
      headers: new Headers({     
        'Content-Type': 'application/json'        
      })
    });
  }
 
}
