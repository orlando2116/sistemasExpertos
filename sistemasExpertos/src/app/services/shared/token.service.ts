import { Injectable } from '@angular/core';

@Injectable()
export class TokenService  {

  public token:string='';
 
  constructor( ) { 
    this.chequearEstado();
  }  

  chequearEstado(){
    if(JSON.parse(localStorage.getItem('token'))){
      this.token=JSON.parse(localStorage.getItem('token'));
    }else{
      this.token='';

     
    }
  }  


  guardarToken(token){   
    return new Promise((resolve, reject) => {   
     try{
       this.token=token;
            
      localStorage.setItem('token',JSON.stringify(this.token));   
      resolve(true);
     }catch(err){
      reject(false);
     }       
    });     
  }

  obtenertoken():any{
    return new Promise((resolve, reject) => {   
      try{
        let token=JSON.parse(localStorage.getItem('token')) || {};
        
       resolve(token);
      }catch(err){
       reject(false);
      }       
     });         
  }

  borrarToken(){
    return new Promise((resolve, reject) => {   
      try{
        this.token='';
       
        localStorage.removeItem('token');
        localStorage.clear();
       
       resolve(true);
      }catch(err){
       reject(false);
      }       
     });    
  }
}