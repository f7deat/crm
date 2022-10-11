declare namespace API {
    type ListApplicationItem = {
        name: string;
    }
    type FacebookConfig = {
        appId: string;
        appSecret: string;
        accessToken: string;
    }
    type SendGridConfig = {
        apiKey: string;
    }
} 