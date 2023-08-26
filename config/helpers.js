import MySqli from 'mysqli';

let conn = new MySqli({
    host: 'localhost',
    // post: '3306',
    user: 'fr-dash-dbdev',
    passwd: 'Hdgt8+TrbY203z',
    db: 'fr_dash_dev'
});

export const   database = conn.emit(false, '');

// module.exports = {
//     database: db
// }
