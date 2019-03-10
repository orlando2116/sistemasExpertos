import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//service
import { TokenService } from '../../services/shared/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _tokenService:TokenService,
    private router:Router) { 
  }

  ngOnInit() {
  }

  signOut(){
    this._tokenService.borrarToken()
    .then(res=>{
      this.router.navigate(['/login']);
    })
  }
}
