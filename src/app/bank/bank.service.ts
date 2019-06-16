import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BankService {
  private subject = new BehaviorSubject<any>({});
  public responseCache = new Map();
  constructor(private httpClient: HttpClient) { }

  getBankLists(query_params: any) {
    let URL = 'https://vast-shore-74260.herokuapp.com/banks?city=' + query_params;
    const bankFromCache = this.responseCache.get(URL);
    if (bankFromCache) {
      return of(bankFromCache);
    }
    const response = this.httpClient.get<any>(URL);
    response.subscribe(banks => this.responseCache.set(URL, banks));
    return response;
  }

  on(): Observable<any> {
    return this.subject.asObservable();
  }
  broadcast(row: any) {
    this.subject.next(row);
  }

}
