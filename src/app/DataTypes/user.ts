export interface IRegisterUser{
    email:string,
    name:string,
    password:string,
    phoneNumber:string

}

export interface IUser{
    email:string,
    name:string,
    password:string,
    token:string,
    phoneNumber:string,
    wishlist:[],
    _id:string,
    joinedDate:string
}

export interface ILoginedUser{
    email:string,
    password:string
  
}
export interface IStoredUser{
    email : string,
    name : string,
    token : string
}