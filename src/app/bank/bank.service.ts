import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BankService {
  private subject = new BehaviorSubject<any>({});
  constructor(private httpClient: HttpClient) { }

  getBankLists() {
    return this.httpClient.get('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI');
  }

  on(): Observable<any> {
    return this.subject.asObservable();
  }
  broadcast(row: any) {
    this.subject.next(row);
  }

}
