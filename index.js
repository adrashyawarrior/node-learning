const mongodb = require("./mongodb")

async function main() {
    const data = [
        {
            name: "Mohan Kumar",
            email: "mohan@test.com",
            password:"Mohan@123"
        },
        {
            name: "Divya Shakti",
            email: "divya@test.com",
            password:"Divya@123"
        }];
    let result = await mongodb.create("User", data);
    console.log(result);
    return "Done";
}

main().then(console.log).catch(console.error);