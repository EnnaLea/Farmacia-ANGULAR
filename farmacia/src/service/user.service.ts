import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from '../service/abstract.service';
import { Observable } from 'rxjs';
import { UserDTO } from 'src/dto/userdto';
import { LoginDTO } from 'src/dto/logindto';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractService<UserDTO>{

  constructor(http: HttpClient) {
    super(http);
    this.type = 'user'
   }

    login(loginDTO: LoginDTO):  Observable<UserDTO>{
      return this.http.post<any>(environment.APIEndpoint + this.type + '/login', loginDTO);

    }
}
