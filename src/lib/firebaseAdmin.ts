import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(), // O usa admin.credential.cert si tienes una clave de servicio
  });
}

export const auth = admin.auth();
