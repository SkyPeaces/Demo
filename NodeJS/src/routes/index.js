import express from "express";
// import homeController from "../controllers/homeController";
// import userController from "../controllers/userController";

let router = express.Router();

const initWebRoute = (app) => {
    // router.post("/api/login", userController.handleLogin);
    // router.get("/api/get-user", userController.getUserById);
    // router.delete("/api/delete-user", userController.delUserById);
    // router.put("/api/update-user", userController.updateUser);
    // router.post("/api/create-user", userController.createUser);

    return app.use("/", router);
};

export default initWebRoute;
