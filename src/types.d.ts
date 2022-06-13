//en este archivo solo puede ir definiciones, no funciones
//contrato que debe tener un objeto

export interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}

export type SubsResponseFromApi = Array<{
  nick: string;
  months: number;
  profileUrl: string;
  description: string;
}>;
