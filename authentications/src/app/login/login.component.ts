import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl} from '@angular/forms';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { first } from 'rxjs/operators';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  signinform = this.formBuilder.group({
    username: ['', Validators.required],
    pass: ['', Validators.required]
});
  
   
 
  
  mydata:any;
  val:any;
  
  
  // constructor(myuserservice:MyuserService){}
  // signIn: FormGroup<{ username: FormControl<string | null>; password: FormControl<string | null>; }> | undefined;
  returnUrl: any;
  loading: boolean | undefined;
  error: any;
  submitted: boolean | undefined;
  UsersService: any;
  // signIn=new FormGroup({
  //   username:new FormControl(),
  //   pass:new FormControl(),


  // });
  AuthenticationService: any;
  


 
  
  // url="http://localhost:3000/users";



constructor(
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private authenticationService:UsersService
) { 
  // redirect to home if already logged in
  // if (this. AuthenticationService.currentUserValue) { 
  //     this.router.navigate(['/']);
  // }
}

ngOnInit() {


  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

login(signinform:any) {
  this.submitted = true;

  this.loading = true;
  this.authenticationService.login(signinform)
      .pipe(first())
      .subscribe(
        (data: any) => {
              this.router.navigate(['/home']);
          },
        ( error: any) => {
              this.error = error;
              this.loading = false;
          });
}}