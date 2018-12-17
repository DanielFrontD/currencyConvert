import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FixerService {

  apiKey = 'bf55333bb079bbdce93d2072082d9b85';

  constructor(private http: HttpClient) {}

  listByCurrencies(){
    return this.http.get(`http://data.fixer.io/api/latest?access_key=${this.apiKey}`);
  }
}
