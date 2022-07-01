declare namespace API {
    export type Contact = {
        id: string;
        fullName: string;
        email: string;
        address: string;
        phoneNumber: string;
        createdDate: Date;
        metaData: string;
    }
}