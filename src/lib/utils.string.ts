
export const colorCategoryDictionary = (str:string) => {
    const namesMap: {[kl: string] : {
        background: string;
        borderColor: string;
        glyphColor: string;
    }} = {
        "comercio": {
            background: "#2190A6",
            borderColor: "#2190A6",
            glyphColor: "#fff"
        },
        "equipamiento_basico": {
            background: "#EF3C76",
            borderColor: "#EF3C76",
            glyphColor: "#fff"
        },
        "espacios_verdes": {
            background: "#A3D063",
            borderColor: "#A3D063",
            glyphColor: "#fff"
        },
        "movilidad": {
            background: "#fff",
            borderColor: "#2190A6",
            glyphColor: "#2190A6"
        }
    };
    
    return namesMap[str] || {
        background: "#fff",
        borderColor: "#fff",
        glyphColor: "#2190A6"
    }; // Si no hay coincidencia, devuelve la cadena original.
}

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