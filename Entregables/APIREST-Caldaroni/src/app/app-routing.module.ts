import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { LoginComponent } from './components/login/login.component';
import { PruebaGuard } from './prueba.guard';


const routes: Routes = [
  { path: '', canActivate: [PruebaGuard], component:AppComponent},
  { path: 'login', component: LoginComponent },
  {path:'personajes', component:ListaPersonajesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
