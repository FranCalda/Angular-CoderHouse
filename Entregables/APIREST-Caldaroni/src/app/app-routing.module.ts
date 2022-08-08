import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { LoginComponent } from './components/login/login.component';




const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'/login' },
  { path: 'login', component: LoginComponent },
  {path:'personajes', component:ListaPersonajesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
