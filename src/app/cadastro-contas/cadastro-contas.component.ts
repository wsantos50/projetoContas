import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cadastro-contas',
  templateUrl: './cadastro-contas.component.html',
  styleUrls: ['./cadastro-contas.component.css']
})
export class CadastroContasComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  cadastrarConta(formCadastro): void {

    //executando uma chamada para a API..
    this.httpClient.post(environment.apiUrl + "/contas",
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
