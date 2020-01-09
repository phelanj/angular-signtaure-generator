import { slideInAnimation, fadeAnimation, openClose } from './animations';
import { SignatureComponent } from './signature/signature.component';
import { Component } from '@angular/core';
import { version } from '../../package.json';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation,
    fadeAnimation,openClose

  ]
})
export class AppComponent {
  version: string = version;
  job: string;
  name: string;
  homePage: boolean = true;
  scriptName: string = "Mail Script";
  title = 'Signature Generator';

  constructor(public router: Router, private _location: Location) { }


backButton() {
  this._location.back();
}

routeChange() {
  if (this.router.url != "/" ? this.homePage = false : this.homePage = true)
  console.log("Current route = " + this.router.url);
} 

}
