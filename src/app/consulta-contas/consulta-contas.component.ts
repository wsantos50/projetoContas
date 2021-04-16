import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-consulta-contas',
  templateUrl: './consulta-contas.component.html',
  styleUrls: ['./consulta-contas.component.css']
})
export class ConsultaContasComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  consultarContas(formConsulta): void {

    //executando uma chamada para a API..
    this.httpClient.get(environment.apiUrl + "/contas",
      formConsulta.form.value)
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
