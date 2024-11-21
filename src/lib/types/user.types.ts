export interface CategoriesVisited {
    [key: string]: {
        [key: string]: boolean
    };
}

export interface UserData {
    id?: string,
    name: string,
    isAdmin?: boolean,
    lastname: string,
    birthday: string,
    dni: string,
    email: string,
    createdAt?: string,
    isFinalized?: boolean,
    startedGame?: boolean,
    locationVisited?: CategoriesVisited
}