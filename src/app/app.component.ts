import { Component } from '@angular/core';

// Добавил
import { Product } from './products';
import { ItemService } from './customerservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-project-angular-table';
  items = [];
    // products = [];

  ngOnInit() {
    const url = `https://api.medzakupivli.com/appellation/type/?hash=8f7d225ffda84d9a143ca8c9868779a95cc9b033`;
    fetch(url)
      .then((responce) => responce.json())
      .then(data => this.items = data)
      .then(date => console.log(this.items))
      // .then(data => this.products = data)
      // .then(date => console.log(this.products))
      .catch(() => console.warn('Server communication error'));
  }
}
