import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInUser } from 'src/users/dto/singin-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() SignInUser: Record<string, any>) {
      return this.authService.signIn(SignInUser.email, SignInUser.password);
    }








}
