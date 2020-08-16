import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { DynamicDataComponent } from './dynamic-data/dynamic-data.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'componentOne', component: ComponentOneComponent },
  { path: 'componentTwo', component: ComponentTwoComponent },
  { path: 'custom/:id', component: DynamicDataComponent }, // custom/123 or custom/abcd
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
