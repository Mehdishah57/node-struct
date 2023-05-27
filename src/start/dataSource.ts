import { DataSource } from "typeorm"

const dataSource = new DataSource({
    type: "postgres",
    host: `${process.env.DB_HOST}`,
    port: +`${process.env.DB_PORT}`,
    username: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASS}`,
    database: `${process.env.DB_NAME}`,
    entities: ["../src/models/*.entity.ts"],
    synchronize: true
})

export default dataSource
