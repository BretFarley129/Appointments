import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html', 
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user = '';
  appointments =[];
  tomorrow;
  day = new Date;
  constructor(private _apiService: ApiService, private route: Router) { }

  onSubmit(id){
    this._apiService.cancel(id);
    this._apiService.getAppointments().subscribe(
      (data)=> {
        this.appointments = data.json();
        for (var i = 0; i < this.appointments.length; i++){
          this.appointments[i]['check'] = this.appointments[i]['date'] > this.tomorrow;
        }
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  ngOnInit() {
    this.day.setDate(this.day.getDate()+1);
    this.day.setMonth(this.day.getMonth()+1);
    this.tomorrow =String(this.day.getFullYear())+'-'+String(this.day.getMonth())+'-'+ String(this.day.getDate())
    this.user = this._apiService.getUser();
    this._apiService.getAppointments().subscribe(
      (data)=> {
        this.appointments = data.json().sort(function(a,b){
          var B =new Date(b.date)
          var A = new Date(a.date)
          return A > B;
        })
        this.day.setDate(this.day.getDate()-1);
        // for (var i in this.appointments){
        //   if(this.appointments[i] < this.day){
            
        //   }
        // }
      },
      (err)=>{
        console.log(err)
      }
    )
  }

}
