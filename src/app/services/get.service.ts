import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Custos } from '../models/custos.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class GetService {

    constructor(private http: HttpClient) { }
    public getCustos(): Observable<any> {
        return this.http.get(`https://desafio-it-server.herokuapp.com/lancamentos/?_sort=mes_lancamento&amp;_order=desc`);
    }


}
