import { Email, Password } from "@mui/icons-material";
import { z } from "zod";

const passwordValidation = new RegExp(
    /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,50})/
)
export const registerSchema = z.object({
    Email: z.string().email(),
    Password: z.string().regex(passwordValidation, {
        message: 'Password must contain 1 uppercase, 1 lowercase, 1 number, 1 special and be at least 6 characters'
    })
})

export type registerSchema = z.infer<typeof registerSchema>;