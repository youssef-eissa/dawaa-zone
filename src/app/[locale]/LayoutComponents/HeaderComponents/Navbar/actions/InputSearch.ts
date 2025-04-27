"use server"

import { prisma } from "../../../../../../../lib/prisma"

type props={
    text:string | ""
}


export async function InputSearch({text}:props) {
    if(text==="") return undefined
    const result =await prisma.product.findMany({
        where:{
            OR:[
                {
                    nameAr:{
                        contains:text,
                    }
                },
                {
                    nameEn:{
                        contains:text,
                        
                    }
                }
            ]
        },
        include:{
            images:true
        }
    })
    return result
    
}