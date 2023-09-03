import express from "express";

import { createReviewCtrl, getReviewByUserCtrl, getTravelGuideCtrl,getReviewByIdCtrl } from '../controllers/reviewController.js'




const route = express.Router()

route.post("/review", createReviewCtrl)
route.get("/getreview", getTravelGuideCtrl)
route.get("/getreviewbyuser/:user", getReviewByUserCtrl)
route.get("/getreviewbyid/:id", getReviewByIdCtrl)
export default route;