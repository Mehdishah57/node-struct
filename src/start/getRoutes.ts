import { Express, json } from "express"
import { graphqlHTTP } from "express-graphql"
import { buildSchema } from "type-graphql"
import { resolvers } from './resolvers'
import cors from "cors"

const getRoutes = async (app: Express) => {
    const schema = await buildSchema({ resolvers })
    app.use(json({ limit: "50mb" }))
    app.use(cors())
    app.use("/graphql", graphqlHTTP({ schema, graphiql: true }))
}

export default getRoutes