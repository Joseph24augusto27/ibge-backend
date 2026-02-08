import express from "express"
import cors from "cors"
import ibgeRoutes from "./routes/ibge.routes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/ibge", ibgeRoutes)


const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})

