import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAcronym(word: string, data: string): Observable<string[]> {
    return this.http.get<string[]>(`https://localhost:5001/Acronym?word=${word}&data=${data}`);
  }
}
