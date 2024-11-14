import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as cors from "cors";

admin.initializeApp();
const auth = admin.auth();
const corsHandler = cors({ origin: true }); // Permite todas las solicitudes de origen

export const listUsers = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      const users = [];
      let result = await auth.listUsers(1000);
      users.push(...result.users);

      while (result.pageToken) {
        result = await auth.listUsers(1000, result.pageToken);
        users.push(...result.users);
      }

      const userData = users.map((user) => ({
        id: user.uid,
        email: user.email,
        name: user.displayName || "Sin nombre",
      }));

      res.status(200).json(userData);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  });
});
