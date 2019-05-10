import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login_url = 'http://localhost:3000/api/login';

  login(user) {
   console.log(user);
    return this.http.post(this.login_url  ,  user).pipe(map((res: any) => {
    console.log(res);
        }));
  }

}
