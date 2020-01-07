import { Component, OnInit } from '@angular/core';
import { version } from '../../../package.json';

@Component({
  selector: 'app-mac',
  templateUrl: './mac.component.html',
  styleUrls: ['./mac.component.scss']
})
export class MacComponent implements OnInit {
  version: string = version;
  job: string;
  name: string;
  title = 'Signature Generator';


  constructor() { }

  ngOnInit() {
  }

}
