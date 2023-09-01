import { db } from "../config/dbConfig.js";
import { execQuery } from "../utils/dbUtil.js";



export const createReviewMdl = function (reveiwData, callback) {
// console.log("hih",reveiwData);
const query = `
INSERT INTO \`travel_guide\` (
    \`title\`,
    \`location\`,
    \`created_by\`,
    \`picture1\`,
    \`picture2\`,
    \`reach_date\`,
    \`how_stay\`,
    \`reveiw\`,
    \`picture1_title\`,
    \`picture2_title\`
) VALUES (
    '${reveiwData.title}',
    '${reveiwData.location}',
    '${reveiwData.created_by}',
    '${reveiwData.picture1}',
    '${reveiwData.picture2}',
    '${reveiwData.reach_date}',
    '${reveiwData.how_stay}',
    '${reveiwData.reveiw}',
    '${reveiwData.picture1_title}',
    '${reveiwData.picture2_title}'
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

