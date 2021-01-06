import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  devUrl: string = "https://localhost:5001";
  prodUrl: string = "https://boboddyv2-api.azurewebsites.net/";
  fill!: string[];

  constructor(private http: HttpClient) {
    // This is just a janky wakeup to the api
    this.getAcronym('a', 'state_union').subscribe((res) => {
      this.fill = res;
    });

  }

  getAcronym(word: string, data: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.prodUrl}Acronym?word=${word}&data=${data}`);
  }
}
