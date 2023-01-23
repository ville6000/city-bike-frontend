export interface IJourney {
  id: number;
  departedAt: Date;
  returnedAt: Date;
  departureStationId: number;
  departureStationName: string;
  returnStationId: number;
  returnStationName: string;
  distance: number;
  duration: number;
}

export interface IStation {
  id: number;
  identifier: number;
  name: string;
  address: string;
  city: string;
  operator: string;
  capacity: number,
  latitude: string;
  longitude: string;
}

export interface IJourneyWithStations extends IJourney {
  departureStation: IStation;
  returnStation: IStation;
}
