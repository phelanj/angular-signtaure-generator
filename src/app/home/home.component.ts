import { Component, OnInit } from '@angular/core';
import { version } from '../../../package.json'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  version:string = version;
  constructor(private http: HttpClient) { }
// this.http.get('http://localhost:port/team-members.json')
//     .subscribe(data => console.log(data));
  ngOnInit() {
  }

}
