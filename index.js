const mongodb = require("./mongodb")

async function main() {
    let result = await mongodb.findAll("User");
    // Printing Result
    console.log(result);
    return "Done";
}

main().then(console.log).catch(console.error);