import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Item {
  id: number;
  image: string;
  name: string;
  qty: number;
  discount: number;
  price: number;
  status: string;

}

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {
  private apiUrl = 'http://localhost:8080/items';

  constructor(private http: HttpClient) { }

  getAllitem(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/all`);
  }
}
