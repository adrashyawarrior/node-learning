const mongodb = require("./mongodb")

async function main() {
    const where = { role: "Employee" };
    const data = { status: "Active" };
    let result = await mongodb.update("User", where, { $set: data });
    console.log(result);
    return "Done";
}

main().then(console.log).catch(console.error);