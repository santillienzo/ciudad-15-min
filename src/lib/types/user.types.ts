export interface CategoriesVisited {
    [key: string]: {
        [key: string]: boolean
    };
}

export interface UserData {
    id?: string,
    name: string,
    lastname: string,
    birthday: string,
    dni: string,
    email: string,
    isFinalized?: boolean,
    locationVisited?: CategoriesVisited
}