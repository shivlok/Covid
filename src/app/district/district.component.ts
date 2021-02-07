import { Component, OnInit } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { CoronaService } from '../services/corona.service';
import { State } from '../shared/state';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {
 state:State;
 displayedColumns=['Name','Confirmed','Recovered','Deaths'];
  constructor(private coronaService:CoronaService,private location:Location,
    private route:ActivatedRoute,public dialog:MatDialogRef<DistrictComponent>) { }

  ngOnInit() {
    const id=this.route.snapshot.params['id'];
    
  }
}  
    
  


