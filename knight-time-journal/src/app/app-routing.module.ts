import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalhomeComponent } from './components/journalhome/journalhome.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'journalhome', component: JournalhomeComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: 'login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
