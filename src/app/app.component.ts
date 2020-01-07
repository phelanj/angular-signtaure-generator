import { slideInAnimation, fadeAnimation, openClose } from './animations';
import { SignatureComponent } from './signature/signature.component';
import { Component } from '@angular/core';
import { version } from '../../package.json';
import { RouterOutlet, Router } from '@angular/router';
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
  title = 'Signature Generator';
  constructor(public router: Router) { }



routeChange() {
  if (this.router.url != "/" ? this.homePage = false : this.homePage = true)
  console.log("Current route = " + this.router.url);
} 

}
