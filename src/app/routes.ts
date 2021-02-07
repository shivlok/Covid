import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DistrictComponent } from './district/district.component';


export const routes :Routes=[
    {path:'home',component:HomeComponent},
    {path:'district/:id',component:DistrictComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}
];