import { db } from "../config/dbConfig.js";
import { execQuery } from "../utils/dbUtil.js";

export const createReviewMdl = function (reviewData,callback) {
  
  // console.log("hiii",reviewData)

  // Now, you can include these base64 strings in your database query
  const query = `
    INSERT INTO \`travel_guide\` (
        \`title\`,
        \`location\`,
        \`created_by\`,
        \`picture1\`,
        \`picture2\`,
        \`reach_date\`,
        \`how_stay\`,
        \`review\`,
        \`picture1_title\`,
        \`picture2_title\`
    ) VALUES (
        '${reviewData.title}',
        '${reviewData.location}',
        '${reviewData.created_by}',
        '${reviewData.picture1}',
        '${reviewData.picture2}',
        '${reviewData.reach_date}',
        '${reviewData.how_stay}',
        '${reviewData.review}',
        '${reviewData.picture1_title}',
        '${reviewData.picture2_title}'
    )
  `;

  if (callback && typeof callback === "function") {
    execQuery(db, query, function (err, results) {
      callback(err, results);
    });
  } else {
    return execQuery(db, query);
  }
};


export const getTravelGuideMdl = function (callback) {
  const query = `SELECT * FROM travel_guide`;

  if (callback && typeof callback === "function") {
    execQuery(db, query, function (err, results) {
      callback(err, results);
    });
  } else {
    return execQuery(db, query);
  }
};

export const getReviewByUserMdl = function (user, callback) {
  const query = `SELECT * FROM travel_guide WHERE created_by = '${user}'`;
  console.log(query);

  if (callback && typeof callback === "function") {
    execQuery(db, query, function (err, results) {
      callback(err, results);
    });
  } else {
    return execQuery(db, query);
  }
};
export const getReviewByIdMdl = function (id, callback) {
  const query = `SELECT * FROM travel_guide WHERE id = '${id}'`;
  console.log(query);

  if (callback && typeof callback === "function") {
    execQuery(db, query, function (err, results) {
      callback(err, results);
    });
  } else {
    return execQuery(db, query);
  }
};
