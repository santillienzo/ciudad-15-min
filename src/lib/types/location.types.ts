export interface Location {
    id:          string;
    name:        string;
    direction?:   string;
    category:    string;
    subcategory: string;
    coord:       Coord;
}

export interface Coord {
    lat:  number;
    long: number;
}