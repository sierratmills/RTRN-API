import { Entity } from "@loopback/repository";
export declare class location extends Entity {
    idlocation: number;
    street: string;
    city: string;
    lat: string;
    long: string;
    storeid: number;
}
