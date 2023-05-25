import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }
  private cache: { [key: string]: any } = {};

 get(key: string): any {
    return this.cache[key] || null;
  }

  set(key: string, data: any): void {
    this.cache[key] = data;
  }

  clear(): void {
    this.cache = {};
  }
}
