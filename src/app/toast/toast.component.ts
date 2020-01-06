import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
@Input() clipboardType: string;

  constructor(public toastr: ToastrService) { }
  ngOnInit() {
  }

@Output() copyEvent = new EventEmitter();


onClick() {
  this.copyEvent.emit(null);
  this.toastr.success('Copied to Clipboard');
}



}
