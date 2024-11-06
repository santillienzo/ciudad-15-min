export interface CategoriesVisited {
    [key: string]: {
        [key: string]: boolean
    };
}

export interface UserData {
    name: string,
    lastname: string,
    birthday: string,
    dni: string,
    email: string,
    locationVisited: CategoriesVisited
}