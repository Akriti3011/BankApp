import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css'],
  providers: [BankService],
  encapsulation: ViewEncapsulation.None,
})
export class BankListComponent implements OnInit {

  rows: any;
  columns: any;
  page_loader: boolean;
  branches: any;
  selectedBranch: any;
  copy_rows: any;
  data: any;
  constructor(
    private bankService: BankService
  ) {
    this.columns = [
      { name: 'IFSC', prop: 'ifsc', width: 120 },
      { name: 'Branch', prop: 'branch', width: 160 },
      { name: 'Address', prop: 'address', width: 250 },
      { name: 'City', prop: 'city', width: 90 },
      { name: 'District', prop: 'district', width: 150 },
      { name: 'State', prop: 'state', width: 150 },
      { name: 'Bank Name', prop: 'bank_name', width: 350 }
    ];
    this.rows = [];
    this.copy_rows = [];
    this.page_loader = false;
    this.branches = ["Mumbai", "Bangalore", "Ahmedabad", "Pune", "Delhi"];
    this.selectedBranch = this.branches[0];
  }

  ngOnInit() {
    this.getBankLists();
  }

  getBankLists() {
    this.page_loader = true;
    this.bankService.getBankLists().subscribe((response: any) => {
      this.rows = response;
      this.data = this.rows;
      this.rows.forEach((row, index) => {
        row.id = index;
      });
    }).add(() => {
      this.page_loader = false;
    });
  }

  getData(event) {
    let data = event.target.value.toUpperCase();
    this.copy_rows = [...this.rows];
    if (data) {
      var new_data: Array<Object>;
      new_data = [];
      this.copy_rows.forEach((row) => {
        let values = JSON.parse(JSON.stringify(Object.values(row)));
        for (let i = 0; i < values.length; i++) {
          if (values[i].toString().includes(data)) {
            new_data.push(row);
          }
        }
      });
      this.data = new_data;
    }
    else {
      this.data = this.rows;
    }
  }

}
