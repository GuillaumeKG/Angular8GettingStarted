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
    let bfoa = new Bfoa()
    bfoa.id = 12
    bfoa.title = 'Structure'
    bfoa.url = 'http://www/google/fr'

    return bfoa
  }

}
