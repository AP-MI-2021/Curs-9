export class Localitate {
  id: string;
  nume: string;
  tip: TipLocalitate;
}

export enum TipLocalitate {
  Sat = 'Sat',
  Oras = 'Oras',
  Municipiu = 'Municipiu',
}

export class LocalitateNumarRute {
  localitate: Localitate;
  numarRute: number;
}
