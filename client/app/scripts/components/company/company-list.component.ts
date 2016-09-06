import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Company, CompanyApi } from '../../shared/index';

@Component({
  selector: 'company-list',
  templateUrl: 'scripts/components/company/company-list.component.html',
  styleUrls: ['scripts/components/company/company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  public companyList: any;
  @Output() public companyListLoaded = new EventEmitter<Array<Company>>();

  constructor(private companyApi: CompanyApi) {}

  ngOnInit() {
    this.companyApi.find().subscribe((companyList: Array<Company>) => {
      this.companyList = companyList;
      this.companyListLoaded.next(this.companyList);
    });
  }
}
