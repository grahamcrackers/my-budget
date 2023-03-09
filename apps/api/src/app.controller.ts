import { Controller, Get, Request, UseGuards } from "@nestjs/common";

import { UserService } from "./user/user.service";

@Controller()
export class AppController {
    constructor(private readonly userService: UserService) {}

    // @Get("users")
    // async getUser(): Promise<UserModel[]> {
    //     return this.userService.users({});
    // }

    // TODO: DTO'S
    // @Post("auth/signup")
    // async signup(@Body() user: { username: string; password: string }): Promise<Omit<UserModel, "password">> {
    //     const createdUser = await this.userService.create(user);
    //     const { password, ...newUser } = createdUser;
    //     return newUser;
    // }

    // @UseGuards(LocalAuthGuard)
    // @Post("auth/login")
    // async login(@Request() request) {
    //     return this.authService.validateLogin(request.user);
    // }

    @Get("profile")
    getProfile(@Request() req) {
        return req.user;
    }

    @Get("examples")
    async getExamples() {
        return {
            data: [{ name: "example 1" }],
        };
    }
}
