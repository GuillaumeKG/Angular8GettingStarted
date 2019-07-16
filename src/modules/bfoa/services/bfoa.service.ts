import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { Bfoa } from '../models/bfoa'

@Injectable({
  providedIn: 'root'
})
export class BfoaService {

  bfoas: Bfoa[]

  constructor(private http: HttpClient) { }

  public getBfoas():Bfoa[]{
    return this.bfoas
  }
  
  public getBfoaById(id:number){

    return {}
  }

}
