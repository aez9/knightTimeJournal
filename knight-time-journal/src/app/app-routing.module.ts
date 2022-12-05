import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalhomeComponent } from './components/journalhome/journalhome.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'journalhome', component: JournalhomeComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
