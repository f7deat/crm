declare namespace API {
    type User = {
        name: string;
        avatar: string;
        email: string;
        emailConfirmed: boolean;
        phoneNumber: string;
        phoneNumberConfirmed: boolean;
        amount: number;
        point: number;
    }
}