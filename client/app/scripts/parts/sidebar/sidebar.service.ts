import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidebarService {
  // Observable source
  private toggledSource = new Subject();

  // Observable stream
  toggled$ = this.toggledSource.asObservable();

  // Service command
  toggle() {
    this.toggledSource.next(null);
  }
}
