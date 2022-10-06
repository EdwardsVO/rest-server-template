import express from "express";
import { getUsers } from "../components/user/controllers";
const router = express.Router();

router.get("/users", getUsers);

export default router;
