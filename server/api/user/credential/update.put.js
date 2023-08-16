
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async(event) => {

        let result = null;
    
        const body = await readBody(event)
        .then(async (val) => {
            console.log("FROM Api => body "+ JSON.stringify(val));
           return val;
        });
        if(body && body.updateCase == 'reset' || body.updateCase == 'change'){

            await prisma.user.update({
                where: {
                  email: body.usr
                },
                data: {
                  password: body.newPassword,
                }
            })
            .then((v) => {
                if(v && v.password != body.previousPassword){
                    console.log("Api + DB => db, table user, update Result user: "+JSON.stringify(v));
                    delete v.password; 
                    result = v;
                }
            });
            return {response: {hasUpdate: result != null}};
        //return {response: `User: ${userId}, ${userMail}, ${updateCredentialCase}`, body_content: body};
        }
   
});