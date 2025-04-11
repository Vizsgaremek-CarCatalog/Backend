export declare class CreateUserDto {
    email: string;
    password: string;
    role: 'USER' | 'ADMIN';
    adminPassword?: string;
}
export declare class AddFavoriteDto {
    carId: number;
}
export declare class ChangePasswordDto {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}
