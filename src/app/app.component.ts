import { Component } from '@angular/core';

// Добавил
import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project-angular-table';
  products = products;
}
