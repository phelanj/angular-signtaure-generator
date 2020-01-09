import { AppGlobals } from './../../app.global';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mac-steps',
  templateUrl: './mac-steps.component.html',
  styleUrls: ['./mac-steps.component.scss'],
  providers: [AppGlobals]
})
export class MacStepsComponent implements OnInit {
  constructor(private _global:AppGlobals) { }
  scriptName:string = this._global.scriptName;
  scriptFile:string = this._global.scriptFile;
  ngOnInit() {
  }

}
