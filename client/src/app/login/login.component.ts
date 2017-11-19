import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    name:''
  }

  constructor(private _apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this._apiService.setUser('');
  }
  onSubmit(){
    this._apiService.setUser(this.user.name);
    this.user ={
      name:''
    }
    this.router.navigate(['dashboard']);
  }

}