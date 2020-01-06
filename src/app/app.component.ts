import { SignatureComponent } from './signature/signature.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  job: string;
  name: string;
  title = 'Signature Generator';
}
