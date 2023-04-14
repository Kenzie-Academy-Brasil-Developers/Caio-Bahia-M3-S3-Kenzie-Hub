import * as z from "zod"

export const schema = z
  .object({
    name: z.string().min(3, "Este campo precisa ter no minimo 3 caracteres"),
    email: z.string().min(1, "Este campo é obrigatório.").email("Insira um e-mail válido"),
    password: z
      .string()
      .min(8, "A senha deve conter pelomenos 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos uma número.")
      .regex(/(?=.*?[!,@,#,$,%,¨,&,*,_,?])/, "É necessário ter um símbolo."),
    repeatpassword: z.string().min(1, "A senha deve conter pelomenos 8 caracteres"),
    bio: z.string().min(1, "Este campo é obrigatório."),
    contact: z.string().min(1, "Este campo é obrigatório."),
    course_module: z.string().min(1, "Este campo é obrigatório.")
  })
  .refine(({ password, repeatpassword }) => repeatpassword === password, {
    message: "As senhas devem corresponder",
    path: ["repeatpassword"]
  })
