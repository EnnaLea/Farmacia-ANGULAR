import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/dto/logindto';
import { UserService } from 'src/service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {

f:any


  // questo é il problema c'é qualcosa che non va con Userservice
  // risolto importando HttpClientModule in app.module
  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }

  loginDTO!: LoginDTO

  // la proprietá ngform non viene riconosciuta
  // il metodo non funziona per CORS policy da rivedere
  login(f: NgForm): void {

    this.loginDTO = new LoginDTO(f.value.username, f.value.password);

    this.service.login(this.loginDTO).subscribe((user) => {

      if (user != null) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log(user.username);     

        switch (user.usertype.toString()) {
          case 'ADMIN': {
            this.router.navigate(['/farmacia']);
            break;
          }
          case 'USER': {
            this.router.navigate(['/homeuser']);
            break;
          }
          default:
            this.router.navigate(['/login']);
        }
      }
    });
  }

}
