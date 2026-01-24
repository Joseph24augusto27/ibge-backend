import express from "express"
import cors from "cors"
import ibgeRoutes from "./routes/ibge.routes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/ibge", ibgeRoutes)


app.listen(3333, () => {
  console.log("🚀 Server running on port 3333")
})
