import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
  { path: 'overview', component: OverviewComponent },
  { path: 'sales', component: SalesComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
