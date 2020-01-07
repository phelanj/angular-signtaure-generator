import { ToastComponent } from './toast/toast.component';
import { MacComponent } from './mac/mac.component';
import { HomeComponent } from './home/home.component';
import { SignatureComponent } from './signature/signature.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Mac', component: MacComponent},
  {path: 'Toast', component: ToastComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
