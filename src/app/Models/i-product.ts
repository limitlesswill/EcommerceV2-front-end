export interface IProduct {
    id : number;
    enName: string;
    arName: string;
    enDescription: string;
    arDescription:string;
    imgURL: string;
    quantity: number;
    price: number;
    priceBeforeDiscount:number
    subCategoryId:number;
}
