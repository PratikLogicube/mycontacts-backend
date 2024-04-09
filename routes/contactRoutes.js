import { Router } from "express";
import { getContact, getContacts, createContact, updateContact, deleteContact } from "../controllers/contactController";
import validateToken from "../middleware/validateTokenHandler";
const router = Router();

router.use(validateToken)

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

export default router;
