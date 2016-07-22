import {Component} from '@angular/core';
import {CategoriesComponent} from "./categories/categories.component";
import {PartnersComponent} from "./partners/partners.component";

@Component({
    selector: 'app-content',
    templateUrl: 'scripts/parts/content/content.component.html',
    directives: [CategoriesComponent, PartnersComponent]
})

export class ContentComponent{}

console.log('sukaa')
