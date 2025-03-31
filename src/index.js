/* function expression*/
import app from "./app.js";
const main = () =>{
    app.listen(app.get("port"));
    console.log(`The conpany's super web server is runnig on port ${app.get("port")}`);
}

main();