import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "typeormprodb1",
    entities: ["src/entities/*{.ts,.js}"],
    synchronize: true,
    logging: true
})

AppDataSource.initialize().then(() => {
    console.log("Database Connected Successfully");
    
}).catch((err) => console.log("Error Connecting Database", err));