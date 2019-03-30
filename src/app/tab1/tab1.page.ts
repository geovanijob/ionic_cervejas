import { Component, OnInit } from '@angular/core';
import { CervejaService } from '../cerveja.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  dadosPagina = [];


  constructor(private service: CervejaService) {
  }

  ngOnInit(): void {
      this.atualizar(); 
  }

  atualizar(){    
    this.service.carregaDados(()=>this.dadosPagina=this.service.dados);
  }

}
