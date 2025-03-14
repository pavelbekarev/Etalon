export interface IHeader{
    imgChild: any;
    txtChild: string;
    txtChildAdditional: string;
}

export interface iCard{
    id: string
    article: string
    title:string
    ImgUrls: string
    priceDef:number
}
export type CartRecord={
    id:string  
    article: string
    title:string
    countProduct:number
    priceDef:number

}

export type Cart={
    Record:CartRecord[]
}

export type Product={
    article: string,
    id:string  ,
    createdAt:string ,
    updatedAt:string,
    deletedAt:string ,
    title:string,
    properties:string,
    ImgUrls: string,
    priceDef:number,
    priceNDS:number,
    inStock:number,
    min:number,
    max:number,
    categoryId:string,
}
export type UserLocal={
    userEmail:string
    userLogin:string
    userToken:string

}

/*
 "id": "",
        "createdAt": "2024-12-19T13:42:59.000Z",
        "updatedAt": "2024-12-19T13:42:59.000Z",
        "deletedAt": null,
        "title": "Гладь с рисунком «горох»",
        "article": "1911-2",
        "properties": "Хлопок 60%, Полиамид 40%",
        "ImgUrls": "D:\\VS2010Test\\Nest\\etalon\\server\\uploads\\sock.png",
        "priceDef": 60,
        "priceNDS": 60,
        "inStock": 10,
        "min": 35,
        "max": 40,
        "categoryId": "10a2a5cc-91d1-4a98-87d1-855f050c0d0c"
*/