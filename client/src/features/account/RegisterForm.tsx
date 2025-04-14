import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../lib/schema/registerSchema";
import { useRegisterMutation } from "./accountApi"
import { useForm } from "react-hook-form";
import { LockOutlined } from "@mui/icons-material";
import { Container, Paper, Box, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function RegisterForm() {
    const [registerUser] = useRegisterMutation();
    const {register, handleSubmit, setError, formState: {errors, isValid, isLoading}} = useForm<registerSchema>({
        mode: 'onTouched',
        resolver: zodResolver(registerSchema)

    })

    const onSubmit = async (data: registerSchema) => {
        
        try{
            await registerUser(data).unwrap();
        }catch(error){
            const apiError = error as {message: string};
            if(apiError.message && typeof apiError.message === 'string'){
                const errorArray = apiError.message.split(',');
                errorArray.forEach(e => {
                    if(e.includes('Password')){
                        setError('Password', {message: e})
                    }else if( e.includes('Email')){
                        setError('Email', {message: e})
                    }
                });
            }

        }
        
    }
  return (
    <Container
    component={Paper} maxWidth='sm' sx={{borderRadius: 3}}>
        <Box display='flex' flexDirection='column' alignItems='center' marginTop='8'>
            <LockOutlined sx={{ mt: 3, color: 'secondary.main', fontSize: 40}}/>
            <Typography variant="h5">
                Register
            </Typography>
            <Box 
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            width='100%'
            display='flex'
            flexDirection='column'
            gap={3}
            marginY={3}
            >
                <TextField 
                fullWidth
                label='Email'
                autoFocus
                {...register('Email')}
                error={!!errors.Email}
                helperText={errors.Email?.message}
                />
                <TextField
                fullWidth
                label='Password'
                type="password"
                {...register('Password')}
                error={!!errors.Password}
                helperText={errors.Password?.message}
                />
                <Button disabled={isLoading || !isValid} variant="contained" type="submit">
                    Register
                </Button>
                <Typography sx={{textAlign: 'center'}}>
                   Already have an account?
                    <Typography sx={{ml: 3}} component={Link} to='/register' color='primary'>
                        Sign in here
                    </Typography>

                </Typography>
            </Box>
        </Box>
    </Container>
  )
}