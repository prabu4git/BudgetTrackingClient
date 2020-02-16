import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TrackingServiceService{
  private apiUrl: string = 'http://localhost:8081/budget';
  constructor(private http: HttpClient) {

  }


   // Read
    public showExpenses() {
      return this.http.get(this.apiUrl);
    }

}
