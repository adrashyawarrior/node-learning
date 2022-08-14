const mongodb = require("./mongodb")

async function main() {
    const where = { name: "Sonali Bindra" };
    const data = { password: "Sonali@789" };
    let result = await mongodb.updateOne("User", where, { $set: data });
    console.log(result);
    return "Done";
}

main().then(console.log).catch(console.error);