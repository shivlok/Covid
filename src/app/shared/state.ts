import { District } from '../shared/district';

export class State{
    id:string;
    state:string;
    active:number;
    confirmed:number;
    recovered:number;
    deaths:number;
    aChanges:number;  // change in active cases
    rChanges:number;  // change in recovered cases
    dChanges:number;  //  change in deaths cases
    districtData:District[];
}