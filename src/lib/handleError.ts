export const firebaseErrorHandler = (code:string) => {
    console.error(code);
    const errorMapping:{[k:string]:string} = {
        "auth/weak-password": "La contraseña es débil",
        "auth/email-already-in-use": "Este usuario ya se encuentra registrado",
        "auth/missing-email": "Necesita un email para poder registrarse",
        "auth/invalid-email": "El email no es válido"
    }

    return errorMapping[code] || "Ha ocurrido un error"
}

export const generalErrorHandler = (message:string) => {
    console.error(message);

    return message
}