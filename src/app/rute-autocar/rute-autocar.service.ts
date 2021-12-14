import { RutaAutocar } from './ruta-autocar.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RuteAutocarService {
  ruteAutocar: RutaAutocar[] = [
    {
      id: '1',
      id_oras_pornire: '1',
      id_oras_oprire: '2',
      pret: 40,
      dus_intors: false,
    },
    {
      id: '2',
      id_oras_pornire: '2',
      id_oras_oprire: '1',
      pret: 45,
      dus_intors: true,
    },
  ];
  constructor() {}

  getAll() {
    return this.ruteAutocar;
  }

  getById(id: string) {
    for (const rutaAutocar of this.ruteAutocar) {
      if (rutaAutocar.id === id) {
        return { ...rutaAutocar };
      }
    }
    return undefined;
  }

  adauga(rutaAutocar: RutaAutocar) {
    this.ruteAutocar.push({ ...rutaAutocar });
  }
}
