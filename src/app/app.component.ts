
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebarOpen = true;

  handleSidebarToggle() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
