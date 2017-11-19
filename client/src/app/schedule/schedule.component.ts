import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  day = new Date;
  tomorrow = new Date;
  
  today = String(this.day.getFullYear())+'-'+String(this.day.getMonth())+'-'+ String(this.day.getDate());
  appointment = {
    date:'',
    time: '',
    complaint:'',
    patient: this._apiService.getUser()
  }
  constructor(private _apiService: ApiService, private router: Router) { 
    this.tomorrow.setDate(this.tomorrow.getDate()+1);
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log('cool');
    this._apiService.addAppointment(this.appointment);
    this.router.navigate(['/dashboard']);
  }

}
