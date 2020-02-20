import { Component, OnInit , ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {App} from 'ionic-angular';

import {WelcomePage} from '../pages/welcome/welcome';



@Component({
  selector: 'app-login',
  templateUrl: './login.html'
})
export class LoginComponent implements OnInit {

  userCrdtnl : string = "none";
  
  constructor(public app: App,public navCtrl: NavController) { }

  ngOnInit() 
  { 
    
  }


  handleLogin(oEvent)
  {
    var formData=oEvent.form.getRawValue();
    var sEMail = formData.email;
    var sPassword = formData.password;
    
    if(sEMail === "test" && sPassword === "test@123")
    {
      this.navCtrl.setRoot(WelcomePage);
      this.userCrdtnl = "none";
    }
    else
    {
      this.userCrdtnl = "initial";
    }
    oEvent.form.reset();
  }
    
    

}
