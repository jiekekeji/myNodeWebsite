var userDao = require("../dao/userdao");


console.log(userDao.findUser("xiaoli",function (users) {
    console.log(users);
}));

var user={
    username:"jack",
    passwd:123456,
    gender:1,
    address:"los",
    phonenum:1234567892
}
console.log(userDao.addUser(user,function (users) {
    console.log(users);
}));