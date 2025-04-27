import { http,HttpResponse } from 'msw'
import { prisma } from '../../lib/prisma'


export const handlers =[



    http.get('/api/products',()=>{
        return HttpResponse.json([
            {
                name:'John Doe'
            },
            {
                name:'John joe'
            },
            {
                name:'John ali'
            },

        ],{status:200})
    })

]
