import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "nestjs-prisma";
import * as bcrypt from "bcryptjs";

const saltRounds = 10;

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    // async create(data: Prisma.UserCreateInput): Promise<User> {
    //     // TODO: validate email
    //     const userRegistered = await this.findOne({ username: data.username });
    //     if (!userRegistered) {
    //         data.password = await bcrypt.hash(data.password, saltRounds);
    //         // TODO: user roles
    //         return this.prisma.user.create({ data });
    //     } else {
    //         throw new HttpException("REGISTRATION.USER_ALREADY_REGISTERED", HttpStatus.FORBIDDEN);
    //     }
    // }

    // async findAll(params: {
    //     skip?: number;
    //     take?: number;
    //     cursor?: Prisma.UserWhereUniqueInput;
    //     where?: Prisma.UserWhereInput;
    //     orderBy?: Prisma.UserOrderByWithRelationInput;
    // }): Promise<User[]> {
    //     const { skip, take, cursor, where, orderBy } = params;
    //     return this.prisma.user.findMany({
    //         skip,
    //         take,
    //         cursor,
    //         where,
    //         orderBy,
    //     });
    // }

    // async findOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null> {
    //     return this.prisma.user.findUnique({ where: userWhereUniqueInput });
    // }

    // async update(params: { where: Prisma.UserWhereUniqueInput; data: Prisma.UserUpdateInput }): Promise<User> {
    //     const { where, data } = params;
    //     return this.prisma.user.update({ data, where });
    // }

    // async remove(where: Prisma.UserWhereUniqueInput): Promise<User> {
    //     return this.prisma.user.delete({ where });
    // }
}
