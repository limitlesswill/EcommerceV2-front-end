import { User } from './../interfaces/auth';
export interface IComment {
    id	: Number;
    review : string;
    quality	: Number;
    productId : Number;
    userName:string;
    date:Date;
    UserId:string;
    }
