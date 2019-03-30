import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CervejaService {

  constructor(private httpClient: HttpClient) {

  }

  public dados = [];

  public carregaDados(callback) {
    return this.httpClient.get(`https://alfa2019-3a196.firebaseio.com/cervejas.json`)
      .toPromise().then(response => {
        this.dados = [];
        Object.keys(response).forEach(key => {
          this.dados.push({
            id: key,
            nome: response[key].nome,
            nota: response[key].nota
          });
          this.dados.sort((a,b)=>a.nota>b.nota?-1:1);
          callback();
        });
      }).catch(
        error => console.log("ERROR", error)
      );
  }
}
