export interface ICategory {
    id: number,
    arName: string,
    enName: string,
    imgURL: string,
    imgURLAr:string,
    subCategories: ISubCategory [];
}

export interface ISubCategory {
    id: number,
    enName: string,
    arName: string,
    categoryId: number,
}

