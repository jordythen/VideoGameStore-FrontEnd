import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularInitTemplateComponent } from './angular-init-template/angular-init-template.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { UrlService } from './services/url.service';
import { AccountqueryComponent } from './accountquery/accountquery.component';
import { InventoryComponent } from './inventory/inventory.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BootstrapCarouselComponent } from './bootstrap-carousel/bootstrap-carousel.component';
import { ViewGameComponent } from './view-game/view-game.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularInitTemplateComponent,
    MainNavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AccountqueryComponent,
    InventoryComponent,
    BootstrapCarouselComponent,
    ViewGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    NgbModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [UserService, UrlService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
