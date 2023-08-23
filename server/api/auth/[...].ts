
// export  default defineEventHandler(async(event) => {

//     let result = true;
//     const body = await readBody(event);
//     return {result};
// })
import  { NuxtAuthHandler } from "#auth";
import { CredentialsProvider } from 'next-auth/providers/credentials';

export default NuxtAuthHandler({
    pages:{
        signIn: '/user/login'
    },
    providers: [        
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point        
        // GithubProvider.default({           
        //     clientId: 'enter-your-client-id-here',           
        //     clientSecret: 'enter-your-client-secret-here'        
        // })    
        CredentialsProvider.default({           
            name: 'Credentials',              
            authorize(credential: any){
                console.log(credential)
                return {};
            }
        })    
    ]
    
})