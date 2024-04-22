const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.db = router.db;
server.use(auth);
server.use(router);

server.listen(4000, () => {
    console.log("JSON Server is running ...");
});
