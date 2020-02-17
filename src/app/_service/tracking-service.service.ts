import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Budget } from '../_models/budget.model';

@Injectable({
  providedIn: 'root'
})
export class TrackingServiceService{
  private apiUrl: string = 'http://localhost:8081/budget';
  constructor(private httpClient: HttpClient) {

  }


   // Read
    public showExpenses() {
       return this.httpClient.get<Budget[]>(`${this.apiUrl}`);
    }

}
