import { createReviewMdl } from "../models/reveiwModel.js";

export const createReviewCtrl = (req, res) => {
    const reviewData = req.body;

    createReviewMdl(reviewData, (err, results) => {
        try {
            if (err) {
                res.status(400).json({ status: 400, message: "Failed to create the review" });
            } else {
                res.status(201).json({ status: 201, message: "Review created successfully" });
            }
        } catch (err) {
            res.status(500).json({ status: 500, message: "Internal server error" });
        }
    });
};
