import dotenv from "dotenv"

const envConfig = () => {
    const NODE_ENV = process.env.NODE_ENV?.trim();
    dotenv.config({ path: `.env.${NODE_ENV}` })
}

export default envConfig