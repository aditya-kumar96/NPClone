export interface packageDetails{
    name:string,
    description:string;
    readme:string;
    author:{
        email:string;
        name:string
    }
    maintainers:{
        email:string,
        name:string;
    }[]
    license:string;
}