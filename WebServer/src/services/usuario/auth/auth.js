
import 'dotenv/config';

export const servicesUsuarioAuthAutenticar = async ({ email, senha }) => {
    /*
    try {
        let user = await modelsUsuarioAuthAutenticar({ email: email })
        if (user.length > 0) {
            const valid = await bcrypt.compare(senha, user[0].senha)
            if (valid) {
                let interesse = await modelsUsuarioAuthInteresse({ interesse: user[0].interesse })
                let max = await modelsQuizzMax({ id: user[0].id })
                const token = jwt.sign(
                    { id: user[0].id, email: user[0].email },
                    process.env.JWT_SECRET,
                    { expiresIn: "24h" }
                )
                delete user[0].senha;
                return { login: true, token: token, user: user[0], interesse: interesse, max: max }
            }
        }
        return { login: false }
    } catch (e) {
        log(import.meta.url, e)
        throw e + " ERROR SERVICES "
    }
    */
}