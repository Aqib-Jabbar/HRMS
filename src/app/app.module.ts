import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';



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
      
      
      domain: 'dev-ey-a0tus.us.auth0.com',
      clientId: '3bNLqZPML7gOAEIfj0GNSOUpU46fx8Gy',
      
      audience: 'https://dev-ey-a0tus.us.auth0.com/api/v2/',
    
      scope: 'read:current_user',
      
      httpInterceptor: {
        allowedList: [
          {
            uri: 'https://dev-ey-a0tus.us.auth0.com/api/v2/*',
            tokenOptions: {
              audience: 'https://dev-ey-a0tus.us.auth0.com/api/v2/',
              
              scope: 'read:current_user'
            }
          }
        ]
      }
    })
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthHttpInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:HttpErrorInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




// The domain and clientId were configured in the previous chapter
// Request this audience at user authentication time
// Request this scope at user authentication time
// Specify configuration for the interceptor              
// Match any request that starts 'https://dev-ey-a0tus.us.auth0.com/api/v2/' (note the asterisk)
// The attached token should target this audience
// The attached token should have these scopes
