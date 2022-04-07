import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-telegram-content',
  templateUrl: './telegram-content.component.html',
  styleUrls: ['./telegram-content.component.scss']
})
export class TelegramContentComponent implements OnInit {

  data?: any[];

  @Input()
    get model(): any {
      return this._model;
    }
    set model(value: any) {
      this._model = value;

      if (value) {
        if (typeof value === 'string') {
          this.data = [value];
        } else {
          // Assuming it's an array
          this.data = value.map((item: any) => {
            if (typeof item === 'object') {
              return '📑 ' + item.text + ' 📑';
            } else {
              return item;
            }
          });
        }
      }
    }
  // tslint:disable-next-line:variable-name
  private _model: any;

  constructor() { }

  ngOnInit(): void {
  }

}
