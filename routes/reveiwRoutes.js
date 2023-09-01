import express from "express";

import { createReviewCtrl } from '../controllers/reveiwController.js'




const route = express.Router()

route.post("/reveiw", createReviewCtrl)

export default route;