import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenHandlerInterceptor } from './interceptors/token-handler.interceptor';
import { MinusPipe } from './pipes/minus.pipe';

@NgModule({
  declarations: [MinusPipe],
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenHandlerInterceptor,
      multi: true,
    },
  ],
  exports: [MinusPipe],
})
export class CoreModule {}
