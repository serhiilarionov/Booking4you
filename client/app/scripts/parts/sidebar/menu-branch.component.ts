import { Component, Input } from '@angular/core';

export interface MenuBranch {
  name: string;
  link: string;
  children?: Array<MenuBranch>;
}

@Component({
  selector: '.menu-branch',
  templateUrl: './menu-branch.component.html'
})

export class MenuBranchComponent {
  @Input() branch: MenuBranch;
  @Input('hash') id: string;
}
