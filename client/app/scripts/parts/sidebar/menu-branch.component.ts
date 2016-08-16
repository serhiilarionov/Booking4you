import {Component, Input} from '@angular/core';

export interface IMenuBranch {
  name: string;
  link: string;
  children?: Array<IMenuBranch>;
}

@Component({
  selector: '.menu-branch',
  templateUrl: 'scripts/parts/sidebar/menu-branch.component.html'
})

export class MenuBranch {
  @Input() branch: IMenuBranch;
  @Input('hash') id: string;
}
