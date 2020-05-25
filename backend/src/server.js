const app = require("./app");

const port = 8888;
require("dns").lookup(require("os").hostname(), function (err, add, fam) {
  var ip_address = add;
  app.listen(port, ip_address, function () {
    console.log("Server starting at " + ip_address + ":" + port);
  });
});
