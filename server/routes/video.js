import  express from "express";
import {uploadVideo} from '../controllers/video.js'
import upload from '../Helpers/fileHelpers.js'
const routes=express.Router();

routes.post("/uploadVideo",upload.single("file"),uploadVideo)

export default routes;