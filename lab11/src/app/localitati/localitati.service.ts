import { Injectable } from '@angular/core';
import { Localitate, TipLocalitate } from '../localitate/localitate.model';

@Injectable({
  providedIn: 'root',
})
export class LocalitatiService {
  localitati: Localitate[] = [
    {
      id: '1',
      nume: 'Fagaras',
      tip: TipLocalitate.Municipiu,
    },
    {
      id: '2',
      nume: 'Floresti',
      tip: TipLocalitate.Sat,
    },
    {
      id: '3',
      nume: 'Campia Turzii',
      tip: TipLocalitate.Oras,
    },
  ];
  constructor() {}

  getAll() {
    return this.localitati;
  }

  getById(id: string) {
    for (const localitate of this.localitati) {
      if (localitate.id === id) {
        return { ...localitate };
      }
    }
    return undefined;
  }

  adauga(localitate: Localitate) {
    this.localitati.push({ ...localitate });
  }
}
