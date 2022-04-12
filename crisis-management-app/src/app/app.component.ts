import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crisis-management-app';
  display = false;

  displaySearchBox(){
    this.display = !this.display;
  }
}
