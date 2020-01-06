import { Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})


export class SignatureComponent implements OnChanges {

  @Input('job_title') job:string;
  @Input('full_name') name:string;

  htmlCode: string;
  socialImgWidth: string = ' width="30"';

  constructor() { }

ngOnChanges() {
  this.htmlCode = '<style>body{font-family: "Futura PT", "Helvetica", "Tahoma", "Times New Roman", sans-serif; color: #77787b; font-weight: 100; font-size: 12px;}p{margin: 0;}.title{font-weight: 100;}.name{color: #EE202E; font-size: 20px; font-weight: bolder !important; text-transform: uppercase;}.contact span{font-weight: bolder; color: black;}.social img{width: 30px; padding: 3px;}.image img{width: 30px;}</style><body><p>Thank you,</p><br><img width="200" src="https://modalight.com/assets/email/moda-logo.png" alt="Modalight"> <p class="title">' + this.job +  '</p><p class="name">' + this.name + '</p><p>3280 W Sunset Road Las Vegas, NV 89118</p><div class="contact"><p><span>T&nbsp;&nbsp;</span>702 407 7775 <span>&nbsp;&nbsp;F&nbsp;&nbsp;</span>702 477 7773</p></div><a style="display: inline;" href="https://modalight.com/#/">www.modalight.com</a> <table class="social"> <tr> <td> <a href="https://www.facebook.com/modalightusa/"><img' + this.socialImgWidth + 'src="https://modalight.com/assets/email/facebook.png" alt="Facebook"></a> </td><td> <a href="https://www.instagram.com/moda_light/"><img' + this.socialImgWidth + 'src="https://modalight.com/assets/email/instagram.png" alt="Instagram"></a> </td><td> <a href="https://twitter.com/modalight?lang=en"><img' + this.socialImgWidth + 'src="https://modalight.com/assets/email/twitter.png" alt="Twitter"></a> </td><td> <a href="https://www.linkedin.com/company/moda-light-usa?trk=similar-companies_org_title"><img' + this.socialImgWidth + 'src="https://modalight.com/assets/email/linkedin.png" alt="Linkedin"></a> </td></tr><tr> </tr></table> <div style="width: 470px;"> <p>LOVE THE EARTH. Think before you print.</p><p>Notice: This e-mail is intended solely for the use of the individual(s) to whom it is</p><p>addressed and may contain information that is privileged, confidential or</p><p>otherwise exempt from disclosure. If the reader of this e-mail is not the intended</p><p>recipient, you are hereby notified that any dissemination, distribution, or </p><p>copying of this communication is strictly prohibited. If you have received this</p><p> communication in error, please immediately notify us by replying to the original</p><p>message at the listed email address.</p></div></body>';
}


copyText(id) {
  var textArea = document.getElementById(id);
  (textArea as HTMLInputElement).select();
  document.execCommand('copy');
}

copyToClipboard(id){
this.clearSelection();
var sel, range;
var el = document.getElementById(id); //get element id
  sel = window.getSelection();
  if(sel.toString() == ''){ //no text selection
   window.setTimeout(function(){
    range = document.createRange(); //range object
    range.selectNodeContents(el); //sets Range
    sel.removeAllRanges(); //remove all ranges from selection
          sel.addRange(range);//add Range to a Selection.
          document.execCommand("copy");
      },1);
      
  }
}

clearSelection()
{
 window.getSelection().removeAllRanges();
}



}
