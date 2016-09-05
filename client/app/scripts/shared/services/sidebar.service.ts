import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidebarService {
  public opened: boolean = false;
  // Observable source
  private toggledSource = new Subject();

  // Observable stream
  toggled$ = this.toggledSource.asObservable();

  // Service command
  toggle() {
    this.opened = !this.opened;
    this.toggledSource.next(this.opened);
  }
}
