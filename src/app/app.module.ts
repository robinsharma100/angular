import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllfilesComponent } from './allfiles/allfiles.component';
import { LeftpartComponent } from './allfiles/leftpart/leftpart.component';
import { RightpartComponent } from './allfiles/rightpart/rightpart.component';
import { CartsideComponent } from './allfiles/cartside/cartside.component';

@NgModule({
  declarations: [
    AppComponent,
    AllfilesComponent,
    LeftpartComponent,
    RightpartComponent,
    CartsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
