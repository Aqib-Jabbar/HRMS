import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    }),
    ToastrModule.forRoot(),
   
    
  
    AuthModule.forRoot({
      // domain
      domain:'dev-ey-a0tus.us.auth0.com',
      // id
      clientId:'3bNLqZPML7gOAEIfj0GNSOUpU46fx8Gy',

      audience: 'https://dev-ey-a0tus.us.auth0.com/api/v2/',

  // Request this scope at user authentication time
  scope: 'read:current_user',

  // Specify configuration for the interceptor              
  httpInterceptor: {
    allowedList: [
      {
        // Match any request that starts 'https://YOUR_DOMAIN/api/v2/' (note the asterisk)
        uri: 'https://dev-ey-a0tus.us.auth0.com/api/v2/*',
        tokenOptions: {
          // The attached token should target this audience
          audience: 'https://dev-ey-a0tus.us.auth0.com/api/v2/',

          // The attached token should have these scopes
          scope: 'read:current_user'
        }
      }
    ]
    
  }

   
    })
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:HttpErrorInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
