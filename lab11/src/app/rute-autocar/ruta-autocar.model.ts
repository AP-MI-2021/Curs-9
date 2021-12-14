export class RutaAutocar {
  id: string;
  id_oras_pornire: string;
  id_oras_oprire: string;
  pret: number;
  dus_intors: boolean;
}

export class RutaDenumireOras {
  ruta: RutaAutocar;
  numeOras: string;
}
