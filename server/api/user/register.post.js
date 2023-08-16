import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async(event) => {
    let result = false;
    let value = null;
    let userError = '';
    const body = await readBody(event)
    .then(async (bodyValue) => {
        console.log("FROM Api => body "+ JSON.stringify(bodyValue));
       return bodyValue;
    });
    if(body){
        await prisma.user.create({
            data: {
                email: body.email,
                username: body.username,
                firstname: body.firstname,
                lastname: body.lastname,
                password: body.password,
            }
        })
        .then((v) => {
            console.log("Api + DB => table user result is: " + JSON.stringify(v));
            value = v;
            result = true;
        })
        .catch(err => {
            console.log("Api + DB => table user error is: " + JSON.stringify(err));
            //Unique constraint failed on the fields: (`email`)
           
            if (err instanceof Prisma.PrismaClientKnownRequestError) {
                // The .code property can be accessed in a type-safe manner
                if (err.code === 'P2002' && err.meta.target.length > 0 ) {
                    const errorMsg = 'Un compte existe déja pour';
                    if(err.meta.target.find(e => e == 'email') != null ){
                        userError = 'EMAIL';
                       // {cas: 'EMAIL', msg:errorMsg + ' cet email.'};
                    }else if(err.meta.target.find(e => e == 'username') != null ){
                        userError = 'USERNAME';
                        //{cas: , msg:errorMsg + ' ce nom d\'utilisateur.'};
                    }else{
                        userError = 'USER';
                        //{cas: 'USER', msg:errorMsg + ' cet utilisateur.'};
                    }
                }
              }
        });

        if(result == true) {
            await prisma.authUser.create({
                data: {
                    userId: value.id
                }
            })
            .then( (a) => {
                console.log("Api + DB => table authUser result is: "+JSON.stringify(a));
            });
        }
        return {response: {createUser:result, userError: userError}};
    }
});

