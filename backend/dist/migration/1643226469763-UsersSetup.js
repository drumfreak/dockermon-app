"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSetup1643226469763 = void 0;
class UsersSetup1643226469763 {
    async up(queryRunner) {
        console.log('User Migration creating role Admin....');
        await queryRunner.query(`INSERT INTO roles (name) VALUES('Admin')`);
        console.log('User Migration creating User dockermon@test.com with pass test1234');
        await queryRunner.query(`INSERT INTO users (email, password, userRole, firstName, lastName) VALUES('whale@dockermon.com', '$2b$08$PlwPLh3EhxGhnvPZMq4ykuGgrOMJfKfsv75g9156lfeZNIH/AOrIi', 1, 'Admin', 'User')`);
        console.log('Host Migration creating default host');
        await queryRunner.query(`INSERT INTO docker_host (id, name, ipAddress, port, active, connectionType, protected) VALUES (1, 'localhost', 'localhost', 2375, 1, 'http', true)`);
    }
    async down(queryRunner) {
        console.log('User Migration running down....');
    }
}
exports.UsersSetup1643226469763 = UsersSetup1643226469763;
//# sourceMappingURL=1643226469763-UsersSetup.js.map