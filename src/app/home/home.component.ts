import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../services/corona.service';
import { State } from '../shared/state';
import {MatDialog} from '@angular/material/dialog';
import { District } from '../shared/district';
import {  DistrictComponent } from '../district/district.component';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedState:State;
  states:State;
  districts:State;

  constructor(private coronaService:CoronaService,public dialog:MatDialog) { }

  ngOnInit():void {
    this.coronaService.getAllData().subscribe((data)=>this.states=data);
    
  }
  
  districtDetails(id:string){
     this.coronaService.getAllData().subscribe((data)=>{data.id==id;
     this.districts=data;
    });
    console.log(this.districts);
  }
}
