import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TedComponent } from './ted/ted.component';
import { DodComponent } from './dod/dod.component';

const routes: Routes = [
  { path: 'ted', component: TedComponent },
  { path: 'dod', component: DodComponent },
  { path: '', redirectTo: '/ted', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
