import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherComponentComponent } from '../app/other-component/other-component.component';
import { ExternalComponent } from '../app/external/external.component';


const routes: Routes = [
  { path: 'other', component: OtherComponentComponent },
  { path: 'external', component: ExternalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
