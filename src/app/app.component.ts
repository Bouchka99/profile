import { AfterViewInit, Component, ElementRef } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'profileMahdi';
  isSideNavCollapsed =false;
  screenWidth = 0;
  onToggleSideNav(data:SideNavToggle){
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;

  }
}
