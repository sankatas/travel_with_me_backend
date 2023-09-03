import { createReviewMdl, getTravelGuideMdl, getReviewByUserMdl,getReviewByIdMdl } from "../models/reviewModel.js";

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

export const getTravelGuideCtrl = (req, res) => {
    getTravelGuideMdl((err, results) => {
        if (err) {
            console.error('Error fetching travel guide data:', err);
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }

        res.status(200).json({ status: 200, data: results });
    });
};

export const getReviewByUserCtrl = (req, res) => {
    const { user } = req.params;
    console.log(user)
    // Call the data retrieval function with the user parameter
    getReviewByUserMdl(user, (err, results) => {
        if (err) {
            console.error('Error fetching travel guides by user:', err);
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }

        // If data retrieval is successful, send the results as JSON
        res.status(200).json({ status: 200, data: results });
    });
};

export const getReviewByIdCtrl = (req, res) => {
    const { id } = req.params;
    console.log(id)
    // Call the data retrieval function with the user parameter
    getReviewByIdMdl(id, (err, results) => {
        if (err) {
            console.error('Error fetching travel guides by user:', err);
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }

        // If data retrieval is successful, send the results as JSON
        res.status(200).json({ status: 200, data: results });
    });
};