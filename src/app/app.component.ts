import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-project-angular-table';
  items = [];

  ngOnInit() {
    const url = `https://api.medzakupivli.com/appellation/type/?hash=8f7d225ffda84d9a143ca8c9868779a95cc9b033`;
    fetch(url)
      .then((responce) => responce.json())
      .then(data => this.items = data)
      .catch(() => console.warn('Server communication error'));
  }
}
