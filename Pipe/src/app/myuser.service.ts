import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { CacheService } from './cache.service';



@Injectable({
  providedIn: 'root'
})
export class MyuserService {

  constructor( private http:HttpClient,private cacheservice:CacheService) { }
 private readonly url="http://localhost:3000/users";

  GetAllData():Observable<any>{
    const CACHDATA=this.cacheservice.get('data');
    if(CACHDATA){
      return of(CACHDATA)}
    else{
      return this.http.get<any>(`${this.url}`).pipe(
        tap((data) => {
          this.cacheservice.set('data', data);
        })
      );
    }
  }

  clearCache(): void {
    this.cacheservice.clear();
  }
}
