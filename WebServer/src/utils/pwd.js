import { fileURLToPath, pathToFileURL } from 'url'
import { dirname } from 'path'

export function pwd(meta = import.meta.url) {
    const filename = fileURLToPath(meta)
    const dir = dirname(filename)
    return { file: filename, dir }
}

export function pwdRaiz() {
    const filename = process.argv[1]
    const dir = dirname(filename)
    return { file: filename, dir }
}
