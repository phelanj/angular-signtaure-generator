import { SignatureComponent } from './signature/signature.component';
import { Component } from '@angular/core';
import { version } from '../../package.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  version: string = version;
  job: string;
  name: string;
  title = 'Signature Generator';
}
