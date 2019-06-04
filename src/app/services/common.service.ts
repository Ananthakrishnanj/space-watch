import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {apodAPI,apiKEY} from '../common/api.constants';
import {catchError, retry} from 'rxjs/operators';
import { throwError } from 'rxjs';
import {InvalidRequest} from '../common/invalidrrequest.error';
import {GenericError} from '../common/genericerror.error';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getAPOD(){    
    return this.http.get(apodAPI+apiKEY) 
    .pipe(
      catchError((error:Response)=>{
        if(error.status == 404) {
          return throwError(new InvalidRequest())
        }
          return throwError(new GenericError())
      })
    )     
  }

}
