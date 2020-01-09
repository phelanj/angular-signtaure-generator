import { AppGlobals } from './../../app.global';
import { Component, OnInit } from '@angular/core';
import { version } from '../../../package.json';

@Component({
  selector: 'app-mac',
  templateUrl: './mac.component.html',
  styleUrls: ['./mac.component.scss'],
  providers: [AppGlobals]
})
export class MacComponent implements OnInit {
  version: string = version;
  job: string;
  name: string;
  title = 'Signature Generator';


  constructor(private _globals:AppGlobals) { }
  scriptName = this._globals.scriptName;
  //scriptFile1:string = this._globals.scriptFile;

  ngOnInit() {
  }

}
