import express from "express";
const router = express.Router();
import { 
    loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserByID,
    deleteUser,
    updateUser
} from "../controllers/userControllers.js";


router.route("/").post(registerUser).get(getUsers);
router.post("/logout", logoutUser);
router.post("/login", loginUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile)
router.route('/:id').delete(deleteUser).get(getUserByID).put(updateUser)

export default router;
