import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import { AuthModule } from './pages/auth/auth.module';
import {PasswordModule} from 'primeng/password';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {AvatarModule} from 'primeng/avatar';
import {RatingModule} from 'primeng/rating';



// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    SharedModule,
    InputTextModule,
    AuthModule,
    CascadeSelectModule,
    PasswordModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }}),
      FormsModule,
      CardModule,
      AvatarModule,
      RatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
