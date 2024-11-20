import { Location } from "./location.types";

export interface IQR extends Location {
    event?: 'finish-game',
    source: 'ciudad-15-minutos',
}