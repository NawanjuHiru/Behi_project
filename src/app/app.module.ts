import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MenuBarComponent } from './Components/menu-bar/menu-bar.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SideNavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
