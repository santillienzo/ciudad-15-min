
export const subcategoriesDictionary = (str:string):string => {
    const namesMap: {[kl: string] : string} = {
      "carniceria": "Carnicería",
      "panaderia": "Panadería",
      "farmacia": "Farmacia",
      "verduleria": "Verdulería",
      "almacen": "Almacén",
      "supermercado": "Supermercado",
      "cajero_automatico": "Cajero Automático",
      "cultura": "Cultura",
      "educacion": "Educación",
      "deporte": "Deporte",
      "bienestar_social": "Bienestar Social",
      "salud": "Salud",
      "espacios_verdes": "Espacios Verdes",
      "metrotranvia": "Metrotranvía",
      "estaciones_de_bicicleta": "Estaciones de Bicicleta",
      "paradas_de_colectivo": "Paradas de Colectivo"
    };
    
    return namesMap[str] || str; // Si no hay coincidencia, devuelve la cadena original.
}

export const categoriesDictionary = (str: string) : string => {
    const namesMap: {[kl: string] : string} = {
        "comercio": "Comercio",
        "equipamiento_basico": "Equipamiento Básico",
        "espacios_verdes": "Espacios Verdes",
        "movilidad": "Movilidad",
    }

    return namesMap[str] || str; // Si no hay coincidencia, devuelve la cadena original.

}


export const formatCategoryName = (str: string) : string => categoriesDictionary(str)
export const formatSubcategoryName = (str: string) : string => subcategoriesDictionary(str)