<template>
    <div>
        <header> 
            <h2> {{pgConnState.header_title_conn}} </h2>
            <li>   
                <NuxtLink to="/user/register">{{pgConnState.head_link_register_title}}</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/user/credential/reset">{{ pgConnState.footer_link_forgot_pswd_title }}</NuxtLink>
            </li>
        </header>
        <div class="form">
            <v-form>
                <div>
                    <label>Identifiant</label>
                    <input type="text" v-model="login.username" />
                </div>
                <div>
                    <label>Mot de passe</label>
                    <input type="password" v-model="login.pswd" />
                </div>
                <div>
                    <button @click="userLogin">Valider</button>
                </div>
                <div>
                    username: {{ login.username }}
                </div>
                <div v-if="loginForm.form_rst.result !== 'NO_SEND'">
                    {{ loginForm.form_rst.msg }}
                </div>
            </v-form>

        </div>
    </div>
</template>

<script setup lang="ts">
import { AppResultForm } from "../../model";
import { _val0, _val_false_No_User } from '../../util';

    


    const pgConnState = useState(() => ({
            header_title_conn:'Connection utilisateur', 
            head_link_register_title:'s\'inscrire', 
            footer_link_forgot_pswd_title:'Mot de passe oublié',
        })
    );

    const login = reactive({
        username: '',
            pswd: '',
    })

    const loginForm = reactive({ 
            form_rst: _val0,
            field_valid_error_msg: ''
        });
    // const apiLogin = await useFetch('/api/login', {
    //     onRequest({ request, options }) {
    //         // Set the request headers
    //         //options.headers = options.headers || {}
    //         //options.headers.authorization = '...'
    //     },
    //     onRequestError({ request, options, error }) {
    //         // Handle the request errors
    //     },
    //     onResponse({ request, response, options }) {
    //         // Process the response data
    //         localStorage.setItem('token', response._data.token)
    //     },
    //     onResponseError({ request, response, options }) {
    //         // Handle the response errors
    //     }
    // });

    const userLogin = async () => {
        //console.log("Auth => ?")
        //condition ?
        if(login.username && login.pswd){
            console.log("Auth api => "+ _val0);
            await useFetch('/api/login', {method:'post', body: { username:login.username, password:login.pswd } })
            .then((res) => console.log("Auth response => "+ JSON.stringify(res)) )
            .catch((err) => console.log('Err when Auth api => ' +  JSON.stringify(err)))
        }
                
                // try {
                //     let response = await this.$auth.loginWith('local', { data: this.login })
                //     console.log(response)
                // } catch (err) {
                //     console.log(err)
                // }
        }
    
    // const onformState = {
    //     data() {
    //         return {
    //             login: {
    //                 username: '',
    //                 pswd: ''
    //             }
    //         }
    //     },
    //     methods: {
    //         async userLogin() {
    //             console.log("Auth => ")
    //             // try {
    //             //     let response = await this.$auth.loginWith('local', { data: this.login })
    //             //     console.log(response)
    //             // } catch (err) {
    //             //     console.log(err)
    //             // }
    //         }
    //     }
    // }

</script>