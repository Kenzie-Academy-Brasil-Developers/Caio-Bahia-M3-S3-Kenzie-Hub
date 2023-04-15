import * as z from "zod"

export const schema = z.object({
  email: z.string().min(1, "O email é obrigatório!").email(),
  password: z.string().min(1, "A senha é obrigatoria!")
})
