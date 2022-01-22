import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable()
export class ItemService {
    // constructor(private http: `https://api.medzakupivli.com/appellation/type`) { }
    // constructor() { }

    getItem() {
        console.log('hi');
        // return this.get<any>('https://api.medzakupivli.com/appellation/type/?hash=8f7d225ffda84d9a143ca8c9868779a95cc9b033')
        //     .toPromise()
        //     .then(res => <Product[]>res.data)
        //     .then(data => { return data; });
        // const url = `https://api.medzakupivli.com/appellation/type/?hash=8f7d225ffda84d9a143ca8c9868779a95cc9b033`;
        // return fetch(url)
        //   .then((responce) => responce.json())
        //   // .then(data => this.products = data)
        //   .then(data => data)
        //   .catch(() => console.warn('Server communication error'));
        // }
        // const url = `https://api.medzakupivli.com/appellation/type/?hash=8f7d225ffda84d9a143ca8c9868779a95cc9b033`;
        // return fetch(url)
        //     .then((responce) => responce.json())
        //     // .then(data => this.products = data)
        //     .then(data => console.log(data))
        //     .catch(() => console.warn('Server communication error'));

    //             return this.http.get<any>('/?hash=8f7d225ffda84d9a143ca8c9868779a95cc9b033')
    //             .toPromise()
    //             .then(res => <Product[]>res.data)
    //             .then(data => { return data; });
    }
}

    // const url = `https://api.medzakupivli.com/appellation/type/?hash=8f7d225ffda84d9a143ca8c9868779a95cc9b033`;
    // // return fetch(url)
    // this.itemService.fetch(url)
    //   .then((responce) => responce.json())
    //   // .then(data => this.products = data)
    //   .then(data => console.log(data))
    //   .catch(() => console.warn('Server communication error'));