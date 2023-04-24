import * as z from "zod"

export const TechCreateschema = z.object({
  title: z.string().min(1, "Este campo é obrigatório."),
  status: z.string().min(1, "Este campo é obrigatório.")
})

export const UpdateSchema = z.object({
  status: z.string().min(1, "Este campo é obrigatório.")
})
