export interface Product {
    mnn_id: number;
    subtype: string;
    num: number;
    name: string;
    release_form: string;
    dosage: string;
    unit: string;
}


// export const products =
//     // [
// {
// "mnn_id":8984,
// "subtype":"",
// "num":1,
// "name":"\u0410\u0437\u0430\u0446\u0438\u0442\u0438\u0434\u0438\u043d",
// "release_form":"\u0430\u043c\u043f\u0443\u043b\u0438, \u0444\u043b\u0430\u043a\u043e\u043d\u0438, \u0448\u043f\u0440\u0438\u0446\u0438",
// "dosage":"100 \u043c\u0433",
// "unit":"\u0430\u043c\u043f\u0443\u043b\u0438, \u0444\u043b\u0430\u043a\u043e\u043d\u0438, \u0448\u043f\u0440\u0438\u0446\u0438"
// }
// {
// "mnn_id":8985,
// "subtype":"",
// "num":2,
// "name":"\u0411\u0456\u043a\u0430\u043b\u0443\u0442\u0430\u043c\u0456\u0434",
// "release_form":"\u0442\u0430\u0431\u043b\u0435\u0442\u043a\u0438, \u043a\u0430\u043f\u0441\u0443\u043b\u0438, \u0434\u0440\u0430\u0436\u0435",
// "dosage":"50 \u043c\u0433",
// "unit":"\u0442\u0430\u0431\u043b\u0435\u0442\u043a\u0438, \u043a\u0430\u043f\u0441\u0443\u043b\u0438, \u0434\u0440\u0430\u0436\u0435"
// },
// {
// "mnn_id":8986,
// "subtype":"",
// "num":3,
// "name":"\u0411\u0456\u043a\u0430\u043b\u0443\u0442\u0430\u043c\u0456\u0434",
// "release_form":"\u0442\u0430\u0431\u043b\u0435\u0442\u043a\u0438, \u043a\u0430\u043f\u0441\u0443\u043b\u0438, \u0434\u0440\u0430\u0436\u0435",
// "dosage":"150 \u043c\u0433",
// "unit":"\u0442\u0430\u0431\u043b\u0435\u0442\u043a\u0438, \u043a\u0430\u043f\u0441\u0443\u043b\u0438, \u0434\u0440\u0430\u0436\u0435"
// }
// ];

// export const products = [
//   {
//     name: 'Phone XL',
//     price: 799,
//     description: 'A large phone with one of the best screens'
//   },
//   {
//     name: 'Phone Mini',
//     price: 699,
//     description: 'A great phone with one of the best cameras'
//   },
//   {
//     name: 'Phone Standard',
//     price: 299,
//     description: ''
//   }
// ];