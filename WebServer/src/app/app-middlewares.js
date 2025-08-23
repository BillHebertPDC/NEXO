import cors from 'cors'
import { Auth } from '../middlewares/auth.js'

export default function appMiddlewares(app) {
    app.use(cors())
    app.use(Auth)
}
