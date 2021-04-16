import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroContasComponent } from './cadastro-contas/cadastro-contas.component';
import { ConsultaContasComponent } from './consulta-contas/consulta-contas.component';

//importando a biblioteca de rotas do angular (links)
import { RouterModule, Routes } from '@angular/router';

//importando a biblioteca do angular para acesso a APIs
import { HttpClientModule } from '@angular/common/http';

//importando a biblioteca do angular para desenvolvimento de formulários
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//mapeando uma rota (endereço de url) para cada componente
const routes : Routes = [
  { path : 'login-usuario', component : LoginUsuarioComponent },
  { path : 'cadastro-usuario', component : CadastroUsuarioComponent },
  { path : 'cadastro-contas', component : CadastroContasComponent },
  { path : 'consulta-contas', component : ConsultaContasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginUsuarioComponent,
    CadastroUsuarioComponent,
    CadastroContasComponent,
    ConsultaContasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //registrando..
    FormsModule, //registrando..
    ReactiveFormsModule, //registrando..
    RouterModule.forRoot(routes) //registrando os mapeamentos..
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
