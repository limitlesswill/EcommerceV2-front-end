import { IProduct } from "../../CategoryList/Model/iproduct";

export interface ISubCategory {
    id: number,
    enName: string,
    arName: string,
    categoryId: number,
    products: IProduct[];
      
}
