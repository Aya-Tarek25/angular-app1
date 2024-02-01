import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { finalize, tap } from 'rxjs/operators';
import { LoaderService } from '../loader.service';


@Injectable()
export class loaderInterceptor implements HttpInterceptor {
    constructor(private loadersrv:LoaderService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();
        this.loadersrv.show()
        return next.handle(req).pipe(
          
       finalize(()=>{
        this.loadersrv.hide()
       })

        );
    }
}