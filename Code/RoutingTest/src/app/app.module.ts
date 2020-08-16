import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { HeaderComponent } from './header/header.component';
import { DynamicDataComponent } from './dynamic-data/dynamic-data.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { TestLifecycleComponent } from './test-lifecycle/test-lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    HeaderComponent,
    DynamicDataComponent,
    ErrorComponent,
    HomeComponent,
    TestLifecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
