import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  register(user) {
    return this.http.post( 'http://localhost:3000/api/register',  user)
      .pipe(map((res: any) => res));
  }

}
