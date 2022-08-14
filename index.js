const mongodb = require("./mongodb")

async function main() {
    const where = { status: "Active" };
    let result = await mongodb.deleteMany("User", where);
    console.log(result);
    return "Done";
}

main().then(console.log).catch(console.error);