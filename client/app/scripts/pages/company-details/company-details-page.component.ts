import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Company, CompanyApi} from '../../shared/index';


@Component({
  selector: 'company-details-page',
  templateUrl: 'scripts/pages/company-details/company-details-page.component.html',
  styleUrls: ['scripts/pages/company-details/company-details-page.component.css']
})
export class CompanyDetailsPageComponent implements OnInit, OnDestroy {
  id: number;
  public companyDetails: Company;
  private companyId: any;

  constructor(public companyApi: CompanyApi, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.companyId = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.companyApi.findById(this.id).subscribe((company: Company) => {
      this.companyDetails = company;
    });
  }

  ngOnDestroy() {
    this.companyId.unsubscribe();
  }
}
