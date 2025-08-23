import { pwdRaiz } from '../utils/pwd.js'
import express from 'express'

export default async function appStatic(app) {
    const { dir } = await pwdRaiz()
    app.use(express.static(`${dir}\\public`))
}
