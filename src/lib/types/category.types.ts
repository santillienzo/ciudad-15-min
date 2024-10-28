export interface ICategory {
    name: string;
    subcategories: {
        name: string;
    }[];
}

export interface ICategoriesResponse {
    categories: ICategory[];
}