import { Component, OnInit } from '@angular/core';
import { GetService } from '../services/get.service';
import { Custos } from '../models/custos.model';

@Component({
    selector: 'app-custos',
    templateUrl: './custos.component.html',
    styleUrls: ['./custos.component.css']
})
export class CustosComponent implements OnInit {
    custos: any;
    erro: any;

    meses = {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7:  'Julho',
        8: 'Agosto',
        9: 'Setembro',
        10: 'Outubro',
        11: 'Novembro',
        12: 'Dezembro'
    };

    categorias = {
        1: 'Transporte',
        2: 'Compras Online',
        3: 'Saúde e Beleza',
        4: 'Serviços Automotivos',
        5: 'Restaurantes',
        6: 'Super Mercados'
    }

    constructor(private getService: GetService) {
        this.getter();
    }

    ngOnInit() {}

    getter() {
        this.getService.getCustos().subscribe((data: Custos) => {
        this.custos = data;
            }, (error: any) => {
                this.erro = error;
            });
    }
}
