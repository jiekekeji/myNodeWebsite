var getpool = require("../database/sqlConn");

module.exports = {

    findUser: function (userName, callBack) {
        getpool().getConnection(function (err, connection) {
            var users = [];
            var sql = "SELECT id,username,passwd,gender,address,phonenum FROM" +
                " user where username='" + userName + "'";
            console.log("findUser sql=" + sql);
            // Use the connection
            connection.query(sql, function (err, rows) {
                // And done with the connection.
                if (err) throw err;
                for (var i = 0; i < rows.length; i++) {
                    var user = new Object();
                    user.id = rows[i].id;
                    user.username = rows[i].username;
                    user.passwd = rows[i].passwd;
                    user.gender = rows[i].gender;
                    user.address = rows[i].address;
                    user.phonenum = rows[i].phonenum;
                    users.push(user);
                }
                connection.release();
                callBack(users);
                // Don't use the connection here, it has been returned to the pool.
            });
        });
    },
    addUser: function (user, callBack) {
        getpool().getConnection(function (err, connection) {
            var users = [];
            var sql = "INSERT INTO user (username,passwd,gender,address,phonenum) " +
                "VALUES (?,?,?,?,?)";
            var columes = [user.username, user.passwd, user.gender, user.address, user.phonenum,];
            console.log("findUser sql=" + sql + " columes=" + columes);
            // Use the connection
            connection.query(sql, columes, function (err, rows) {
                // And done with the connection.
                if (err) throw err;
                connection.release();
                callBack(rows.affectedRows);
                // Don't use the connection here, it has been returned to the pool.
            });
        });
    }

}

