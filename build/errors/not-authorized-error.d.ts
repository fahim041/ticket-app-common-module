import { CustomError } from "./custom-error";
export declare class NotAuthroziedError extends CustomError {
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
        field?: string | undefined;
    }[];
}
