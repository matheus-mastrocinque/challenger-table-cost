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
