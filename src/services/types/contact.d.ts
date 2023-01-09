declare namespace API {
    export type Contact = {
        id: string;
        name: string;
        email: string;
        address: string;
        phoneNumber: string;
        createdDate: Date;
        metaData: string;
    }
    export type Gallery = {
        id: string;
        name: string;
        createdDate: Date;
    }
}