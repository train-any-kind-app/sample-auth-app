

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();



export default defineEventHandler(async(event) => {

        let result = null;
        const body = await readBody(event)
        .then(async (bodyValue) => {
            console.log("FROM Api => body "+ JSON.stringify(bodyValue));
           return bodyValue;
        });
        if(body){
            await prisma.user.findFirst({
                where: {
                    email: body.username, 
                    password: body.password
                },
                include: { AuthUser : false },
            })
            .then((v) => {
                if(v) delete v.password; 
                console.log("Api + DB => db Result have user: "+JSON.stringify(v));
                result = v;
            });
            return {response: result};
        }
   
});
