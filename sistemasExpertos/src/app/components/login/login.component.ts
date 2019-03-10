import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//models
import { Login } from '../../models/login';

//services
import { LoginService } from '../../services/login.service';
import { TokenService } from '../../services/shared/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userLogin:Login=new Login();

  constructor(
    private _loginService:LoginService,
    private router:Router,
    private _tokenService:TokenService) {
      this.userLogin.password= 'KJ=L^3a(W+}rsjX';
      this.userLogin.username= 'ogonzalez';
    }

  ngOnInit() {
  }

  login(){
    this._loginService.post(this.userLogin).subscribe(res=>{
      
      const token=res.message.data.token;

      this._tokenService.guardarToken(token)
      .then(res=>{
        this.router.navigate(['/ordenes']);
        })

    },err=>{
    })
   }
}
