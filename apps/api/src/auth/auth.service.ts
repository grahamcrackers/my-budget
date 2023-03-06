import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import * as bcrypt from "bcryptjs";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOne({ username });
        // TODO: verify email

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (isValidPassword) {
            // TODO: CREATE JWT TOKEN
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password, ...result } = user;
            return result;
        } else {
            throw new HttpException("LOGIN.ERROR", HttpStatus.UNAUTHORIZED);
        }
    }

    async validateLogin(user: any) {
        const payload = { username: user.username, sub: user.userId };

        return { access_token: this.jwtService.sign(payload) };
    }
}
