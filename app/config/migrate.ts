import { migrate } from "drizzle-orm/postgres-js/migrator";
import {getDb, getSql} from "./init"

async function main() {
    await migrate(getDb(), { migrationsFolder: "drizzle" });
    
    await getSql().end();
}

main().then(() => console.log("Done")).catch(console.error);