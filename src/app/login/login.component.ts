import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { loginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    userId:null,
    userName:null,
    emailId:null,
    password:null,
    type:null
  };
  type:any;
  users=[];
  constructor(private auth: AuthService, private router: Router,private loginService: loginService) { }
  login(loginForm: NgForm) {
    console.log(loginForm.value);
      this.auth.login(loginForm.value).subscribe(data => {
        console.log(data);
        if (data.type === 'Admin') {
          alert('login successfull');
          this.loginService.isAdminLoggedIn = true;
          this.router.navigateByUrl('/');
        } else if (data.type === 'Librarian') {
          alert('login successfull');
          this.loginService.isLibrarianLoggedIn = true;
          this.router.navigateByUrl('/');
        } else if (data.type=== 'User') {
          alert('login successfull');
          this.loginService.isUserLoggedIn = true;
          this.router.navigateByUrl('/');
        } else {
          alert('ENTER CORRECT CREDENTAILS');
          loginForm.reset();
        }
      });
    }
  ngOnInit() {
  }

}
