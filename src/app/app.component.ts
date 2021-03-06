import { Component, Input } from '@angular/core';

import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-table';
  items = [];
  cols: any = [];

  _selectedColumns: any = [];
  constructor() {}

  ngOnInit() {
    const url = `https://api.medzakupivli.com/appellation/type/?hash=8f7d225ffda84d9a143ca8c9868779a95cc9b033`;
    fetch(url)
      .then((responce) => responce.json())
      .then((data) => (this.items = data))
      .catch(() => console.warn('Server communication error'));

    this.cols = [
      { field: 'num', header: '№ Номенклатури' },
      { field: 'mnn_id', header: 'Ідентифікатор' },
      { field: 'name', header: 'Назва' },
      { field: 'release_form', header: 'Форма випуску' },
      { field: 'dosage', header: 'Дозування' },
      { field: 'unit', header: 'Одиниці виміру' },
    ];
    this._selectedColumns = this.cols;
  }
  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.items);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'items');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }
  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }
}
