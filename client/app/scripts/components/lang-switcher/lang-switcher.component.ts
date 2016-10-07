import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StorageDriver } from '../../shared/sdk/storage/storage.driver';
import { TranslateService } from 'ng2-translate/ng2-translate';

const langList = [{
    id: 'en',
    name: 'English'
  }, {
    id: 'ru',
    name: 'Русский'
  }, {
    id: 'ua',
    name: 'Українська'
  }];

@Component({
  selector: 'lang-switcher',
  templateUrl: 'scripts/components/lang-switcher/lang-switcher.component.html',
  styleUrls: ['scripts/components/lang-switcher/lang-switcher.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LangSwitcherComponent implements OnInit {
  public langList: Array<any> = langList;
  public selected: string;

  constructor(
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.selected = StorageDriver.get('currentLang') ? StorageDriver.get('currentLang') : this.translate.currentLang;
    this.translate.use(this.selected);
  }

  onSelected(value: any) {
    this.translate.use(value);
    StorageDriver.set('currentLang', value);
  }
}
