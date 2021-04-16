import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  //função executada no evento (submit) do formulário
  cadastrarUsuario(formCadastro): void {

    //executando uma chamada para a API..
    this.httpClient.post(environment.apiUrl + "/usuarios",
      formCadastro.form.value)
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
