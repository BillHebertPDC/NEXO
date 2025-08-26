import express from 'express'
//import appSession from './app-session.js'
import appMiddlewares from './app-middlewares.js'
import appStatic from './app-static.js'
import appRoutes from './app-routes.js'
import { error } from '../middlewares/erro.js'


export function createApp() {
    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    // appSession(app)
    appMiddlewares(app)
    appStatic(app)
    appRoutes(app)
    app.use(error)
    return app
}