const sequelize = require("./config/database");
const app = require("./main");

async function main(){
    try {
        await sequelize.sync();
        console.log("Database synced successfully.");
        app.listen(3000, () => console.log("Server is running on port 3000."));
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
}

main();