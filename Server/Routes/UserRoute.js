import express from "express";
import {
  addLikedMovie,
  changeUserPassword,
  deleteLikedMovies,
  deleteUser,
  deleteUserProfile,
  getLikedMovies,
  getUsers,
  loginUser,
  registerUser,
  updateUserProfile,
} from "../Controllers/UserController.js";
import { admin, protect } from "../middlewares/Auth.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);

//Private routes
router.put("/", protect, updateUserProfile);
router.delete("/", protect, deleteUserProfile);
router.put("/password", protect, changeUserPassword);
router.get("/favourite", protect, getLikedMovies);
router.post("/favourite", protect, addLikedMovie);
router.delete("/favourite", protect, deleteLikedMovies);

//Admin Routes
router.get("/", protect, admin, getUsers);
router.delete("/:id", protect, admin, deleteUser);

export default router;
