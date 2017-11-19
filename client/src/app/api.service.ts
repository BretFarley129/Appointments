import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class ApiService {
  user ='';
  question;
  constructor(private _http: Http) { }

  setUser(name){
    this.user = name;
  }

  getUser(){
    return this.user;
  }

  addAppointment(appointment){
    console.log('attempting to add new entry');
    this._http.post('/newApp', appointment).subscribe(
      data =>{
        console.log("success!");
      },
      err =>{
        console.log('something went wrong')
      }
    )
  }
  
  getAppointments(){
    return this._http.get('/getAll');
  }

}
 