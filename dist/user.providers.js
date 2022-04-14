"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.photoProviders = void 0;
const photo_entity_1 = require("./photo.entity");
exports.photoProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection) => connection.getRepository(photo_entity_1.User),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=user.providers.js.map