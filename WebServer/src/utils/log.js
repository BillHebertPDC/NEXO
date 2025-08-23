import { pwd } from "./pwd.js"
export async function log(meta = import.meta.url, params) {
    const { file, dir } = await pwd(meta)
    return console.log("\x1b[36m%s\x1b[0m", `
        EXECUTANDO: ${file}
                ${params}
        FIM
        `
    )
}