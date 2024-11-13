export type IQR = {
    id?: string,
    type?: string,
    name?: string,
    category?: string,
    subcategory?: string,
    direction?: string,
    source: 'ciudad-15-minutos',
    // event: 'mark-location' | 'finish-game'
    event?: 'finish-game'
}