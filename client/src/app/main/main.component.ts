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

  ngOnInit() {
    this.day.setDate(this.day.getDate()+1);
    this.day.setMonth(this.day.getMonth()+1);
    this.tomorrow =String(this.day.getFullYear())+'-'+String(this.day.getMonth())+'-'+ String(this.day.getDate())
    console.log(String(this.day.getFullYear())+'-'+String(this.day.getMonth())+'-'+ String(this.day.getDate()));
    this.user = this._apiService.getUser();
    this._apiService.getAppointments().subscribe(
      (data)=> {
        console.log(data.json());
        this.appointments = data.json();
        for (var i = 0; i < this.appointments.length; i++){
          console.log(this.appointments[i]['date']);
          console.log(this.tomorrow);
          this.appointments[i]['check'] = this.appointments[i]['date'] > this.tomorrow;
          console.log(this.appointments[i]['check']);
        }
      },
      (err)=>{
        console.log(err)
      }
    )
    console.log(this.appointments)
  }

}
