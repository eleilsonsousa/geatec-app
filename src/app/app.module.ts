import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';
import { CurrencyPipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SimpleMaskModule,
    
          
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CurrencyPipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],

  
  bootstrap: [AppComponent],
  schemas:
        [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
