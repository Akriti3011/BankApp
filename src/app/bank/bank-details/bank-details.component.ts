import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  bank_data: any;
  constructor(private bankService: BankService) {
    this.subscription = this.bankService.on().subscribe((row) => {
      this.bank_data = row;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
