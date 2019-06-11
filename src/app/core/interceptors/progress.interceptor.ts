import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProgressBarService } from '../services/progress-bar.service';

export class ProgressInterceptor implements HttpInterceptor {
    constructor(private progressBarService: ProgressBarService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.progressBarService.show();
        return next
            .handle(req).pipe(
                tap(event => {
                    this.progressBarService.hide();
                }));
    }
}
