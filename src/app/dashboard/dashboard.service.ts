import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  dataSource = new BehaviorSubject<String>('Dashboard');


  constructor(private http: HttpClient) { }

 
  getall() {
    return this.http.get('http://localhost:3000/api/getAll')
    .pipe(map((res: any) => res));
  }

  delete(id) {
    return this.http.delete('http://localhost:3000/api/delete/' + id)
    .pipe(map((res: any) => res));
  }
 
  add(user) {
    console.log('in add service')
    return this.http.post('http://localhost:3000/api/createData',  user)
      .pipe(map((res: any) => res));
  }
  edit(id, obj) {
    console.log('in edit service')
    return this.http.put('http://localhost:3000/api/editData/' + id , obj, {})
      .pipe(map((res: any) => res));
  }

}
