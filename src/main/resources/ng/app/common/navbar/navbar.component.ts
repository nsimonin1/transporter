import { Component, OnInit, Output,EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isActive: boolean;
  collapsed: boolean;
  showMenu: String;
  pushRightClass: String;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.isActive = false;
    this.collapsed = false;
    this.showMenu = '';
    this.pushRightClass = 'push-right';
  }

  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
        this.showMenu = '0';
    } else {
        this.showMenu = element;
    }
}

  toggleCollapsed(){
    this.collapsed = ! this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
  }

}
