import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  //declarando e inicializando o HttpClient
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  //função executada no evento (submit) do formulário..
  autenticarUsuario(formLogin) : void {

    //executando uma chamada para a API..
    this.httpClient.post(environment.apiUrl + "/login", formLogin.form.value)
      .subscribe( //recebe o retorno da api (promisse)
        (data) => { //sucesso!
          console.log(data);
        },
        (e) => { //erro!
          console.log(e);
        }
      )
  }
}



