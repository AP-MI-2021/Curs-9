import { TipLocalitate } from '../localitate/localitate.model';
import { LocalitatiService } from './../localitati/localitati.service';
import { RuteAutocarService } from './rute-autocar.service';
import { RutaAutocar, RutaDenumireOras } from './ruta-autocar.model';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rute-autocar',
  templateUrl: './rute-autocar.component.html',
  styleUrls: ['./rute-autocar.component.css'],
})
export class RuteAutocarComponent implements OnInit {
  ruteAutocar: RutaAutocar[];
  rutaAutocar = new RutaAutocar();

  eroareId: string;
  eroareIdOrasPornire: string;
  eroareIdOrasOprire: string;

  ruteOpriteInMunicipiu: RutaDenumireOras[];

  constructor(
    private ruteAutocarSvc: RuteAutocarService,
    private localitatiSvc: LocalitatiService
  ) {}

  ngOnInit(): void {
    this.refreshState();
    this.rutaAutocar.dus_intors = true;
    this.afiseazaRuteOpriteInMunicipiu();
  }

  adaugaRutaAutocar() {
    this.valideazaRutaAutocar();
    if (
      !this.eroareId &&
      !this.eroareIdOrasPornire &&
      !this.eroareIdOrasOprire
    ) {
      this.ruteAutocarSvc.adauga(this.rutaAutocar);
      this.afiseazaRuteOpriteInMunicipiu();
    }
  }

  private afiseazaRuteOpriteInMunicipiu() {
    this.ruteOpriteInMunicipiu = [];
    for (const ruta of this.ruteAutocar) {
      const orasOprire = this.localitatiSvc.getById(ruta.id_oras_oprire);
      if (orasOprire.tip === TipLocalitate.Municipiu) {
        this.ruteOpriteInMunicipiu.push({
          ruta: ruta,
          numeOras: orasOprire.nume,
        });
      }
    }
  }

  private refreshState() {
    this.ruteAutocar = this.ruteAutocarSvc.getAll();
  }

  private valideazaRutaAutocar() {
    this.valideazaIdRitaAutocar();
    this.valideazaIdOrasPorniteRutaAutocar();
    this.valideazaIdOrasOprireRutaAutocar();
  }

  private valideazaIdRitaAutocar() {
    this.eroareId = '';
    if (!this.rutaAutocar.id) {
      this.eroareId = 'Id-ul nu poate fi nul!';
    } else if (this.ruteAutocarSvc.getById(this.rutaAutocar.id)) {
      this.eroareId = 'Id-ul trbeuie sa fie unic!';
    }
  }

  private valideazaIdOrasPorniteRutaAutocar() {
    this.eroareIdOrasPornire = '';
    if (!this.rutaAutocar.id_oras_pornire) {
      this.eroareIdOrasPornire = 'Id-ul roasului de pornire nu poatefi gol!';
    } else if (
      this.rutaAutocar.id_oras_pornire === this.rutaAutocar.id_oras_oprire
    ) {
      this.eroareIdOrasPornire =
        'Id-urile oraselor de pornire/oprire trebuie sa fie diferite!';
    } else if (!this.localitatiSvc.getById(this.rutaAutocar.id_oras_pornire)) {
      this.eroareIdOrasPornire = `Nu exista niciun oras cu id-ul ${this.rutaAutocar.id_oras_pornire}`;
    }
  }

  private valideazaIdOrasOprireRutaAutocar() {
    this.eroareIdOrasOprire = '';
    if (!this.rutaAutocar.id_oras_oprire) {
      this.eroareIdOrasOprire = 'Id-ul orasului de oprire nu poatefi gol!';
    } else if (!this.localitatiSvc.getById(this.rutaAutocar.id_oras_oprire)) {
      this.eroareIdOrasOprire = `Nu exista niciun oras cu id-ul ${this.rutaAutocar.id_oras_oprire}`;
    }
  }
}
