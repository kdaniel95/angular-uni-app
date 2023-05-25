import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, of, share, tap } from "rxjs"
import { CacheResolverService } from "../services/cache-resolver.service";

const TTL = 30;

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cacheResolver: CacheResolverService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if(req.method !== "GET" || (req.method === 'GET' && req.urlWithParams.match(/[0-9]+/g))) {
        return next.handle(req)
    }

    const cachedResponse = this.cacheResolver.get(req.url);

    if(cachedResponse) {
        return of(cachedResponse.clone())
    }

    return next.handle(req).pipe(
      tap(stateEvent => {
        if (stateEvent instanceof HttpResponse) {
          this.cacheResolver.set(req.url, stateEvent)
        }
      }),
      share()
    )
  }
}
