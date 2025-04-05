export declare class CreateUserDto {
    email: string;
    password: string;
    role: 'USER' | 'ADMIN';
    adminPassword?: string;
}
