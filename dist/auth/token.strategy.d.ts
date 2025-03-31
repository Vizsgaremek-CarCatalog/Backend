import { UsersService } from "src/users/users.service";
declare const TokenStrategy_base: new (...args: any) => any;
export declare class TokenStrategy extends TokenStrategy_base {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(token: string): Promise<{
        id: number;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
export {};
