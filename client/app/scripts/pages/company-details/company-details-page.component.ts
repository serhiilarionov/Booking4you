import {Component, OnInit, OnDestroy, Inject } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Company, CompanyApi, Client, ClientApi, EventTypes, Broadcaster } from '../../shared/index';

@Component({
  selector: 'company-details-page',
  templateUrl: 'scripts/pages/company-details/company-details-page.component.html',
  styleUrls: ['scripts/pages/company-details/company-details-page.component.css']
})
export class CompanyDetailsPageComponent implements OnInit, OnDestroy {
  public queryId: number;
  public currentUser: Client;
  public companyDetails: Company;
  public addState: boolean = false;
  private companyId: any;

  constructor(public companyApi: CompanyApi,
              private route: ActivatedRoute,
              private router: Router,
              private clientApi: ClientApi,
              @Inject(Broadcaster) private broadcaster: Broadcaster<string>) {

    this.currentUser = this.clientApi.getCachedCurrent();
    this.broadcaster.subscribe((eventType) => {
      if (eventType === EventTypes.LOGGED_IN) {
        this.currentUser = this.clientApi.getCachedCurrent();
        this.checkForExists();
      }
    });
  }

  ngOnInit() {

    this.companyId = this.route.params.subscribe(params => {
      this.queryId = +params['id'];
    });

    this.companyApi.findById(this.queryId).subscribe((company: Company) => {
        this.companyDetails = company;
      }, (error) => {
        this.router.navigate(['/comming-soon']);
      }
    );
  }

  ngOnDestroy() {
    this.companyId.unsubscribe();
  }

  addToFavorite() {
    this.clientApi.linkCompanies( this.currentUser.id, this.queryId ).subscribe(() => {
        this.addState = true;
    });
  }

  checkForExists() {
    if (!this.currentUser) { return; }
    this.clientApi.existsCompanies(this.currentUser.id, this.queryId).subscribe((data) => {
        this.addState = true;
      }, (error) => {
        this.addState = false;
      }
    );
  }
}

// TODO: add 404 page for non existing companies
