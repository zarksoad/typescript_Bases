declare class DatabaseConnection {
    beginTransaction(): void;
    commitTransaction(): void;
    rollbackTransaction(): void;
}
declare function Transactional(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any>;
declare class UserService {
    createUser(username: string, email: string): void;
}
declare const userService: UserService;
//# sourceMappingURL=index.d.ts.map