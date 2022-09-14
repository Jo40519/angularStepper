import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperModule } from './pages/steps/steps.module';
import { HeaderComponent } from './components/header/header.component';
import {CardModule} from 'primeng/card';
import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import {MenuItem} from 'primeng/api';
import {PanelMenuModule} from 'primeng/panelmenu';
import {InputSwitchModule} from 'primeng/inputswitch';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StepperModule,
    CardModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    PanelMenuModule,
    InputSwitchModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
