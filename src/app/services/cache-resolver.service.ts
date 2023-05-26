import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheResolverService {
  private cache = new Map<string, HttpResponse<any>>();

  constructor() {}
  set(key: string, value: HttpResponse<any>) {
    this.cache.set(key, value);
  }

  get(key: string) {
    return this.cache.get(key);
  }

  delete(key: string) {
    return this.cache.delete(key);
  }
}
