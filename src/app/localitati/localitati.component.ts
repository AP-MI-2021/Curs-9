import { LocalitatiService } from './localitati.service';
import { Component, OnInit } from '@angular/core';
import {
  Localitate,
  LocalitateNumarRute,
  TipLocalitate,
} from '../localitate/localitate.model';
import { RuteAutocarService } from '../rute-autocar/rute-autocar.service';

@Component({
  selector: 'app-localitati',
  templateUrl: './localitati.component.html',
  styleUrls: ['./localitati.component.css'],
})
export class LocalitatiComponent implements OnInit {
  localitati: Localitate[];
  localitate = new Localitate();

  eroareId: string;
  eroareNume: string;

  localitatiNumarRute: LocalitateNumarRute[];
  jsonResult;

  constructor(
    private localitatiSvc: LocalitatiService,
    private ruteAutocarSvc: RuteAutocarService
  ) {}

  ngOnInit(): void {
    this.refreshState();
    this.localitate.tip = TipLocalitate.Sat;
  }

  adaugaLocalitate() {
    this.valideazaLocalitate();

    if (!this.eroareId && !this.eroareNume) {
      this.localitatiSvc.adauga(this.localitate);
    }
  }

  afiseazaLocalitatiOrdonateNuamrRute() {
    this.localitatiNumarRute = [];
    for (const localitate of this.localitati) {
      const loc = new LocalitateNumarRute();
      loc.localitate = localitate;
      loc.numarRute = this.ruteAutocarSvc
        .getAll()
        .filter(
          (ruta) => ruta.id_oras_pornire === localitate.id && ruta.dus_intors
        ).length;
      this.localitatiNumarRute.push(loc);
    }
    this.localitatiNumarRute.sort((l1, l2) => l1.numarRute - l2.numarRute);
  }

  arataJson() {
    this.jsonResult = {};
    const ruteAutocar = this.ruteAutocarSvc.getAll();
    for (const localitate of this.localitati) {
      this.jsonResult[localitate.nume] = [];
      const ruteLocalitate = ruteAutocar.filter(
        (ruta) => ruta.id_oras_pornire === localitate.id
      );
      for (const rutaLocalitate of ruteLocalitate) {
        const localitateDestinatie = this.localitati.find(
          (loc) => loc.id === rutaLocalitate.id_oras_oprire
        );
        if (
          !this.jsonResult[localitate.nume].find(
            (l) => l === localitateDestinatie.nume
          )
        ) {
          this.jsonResult[localitate.nume].push(localitateDestinatie.nume);
        }
      }
    }
  }

  private refreshState() {
    this.localitati = this.localitatiSvc.getAll();
  }

  private valideazaLocalitate() {
    this.valideazaIdLocalitate();
    this.valideazaNumeLocalitate();
  }

  private valideazaIdLocalitate() {
    if (!this.localitate.id) {
      this.eroareId = 'Id-ul nu poate fi gol!';
    } else if (this.localitatiSvc.getById(this.localitate.id)) {
      this.eroareId = 'Id-ul trebuie sa fie unic!';
    } else {
      this.eroareId = '';
    }
  }

  private valideazaNumeLocalitate() {
    if (!this.localitate.nume) {
      this.eroareNume = 'Numele nu poate fi gol!';
    } else {
      this.eroareNume = '';
    }
  }
}
