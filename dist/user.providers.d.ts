import { Connection } from 'typeorm';
export declare const photoProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<unknown>;
    inject: string[];
}[];
