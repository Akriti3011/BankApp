import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BankService {
  constructor(private httpClient: HttpClient) { }

  getBankLists() {
    return this.httpClient.get('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI');
  }

}
