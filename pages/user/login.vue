<template>
    <div>
        <header> 
            <h2> {{pgConnState.header_title_conn}} </h2>
            <li>   
                <NuxtLink :to="pgConnState.register_redirect_link">{{pgConnState.head_link_register_title}}</NuxtLink>
            </li>
            <li>
                <NuxtLink :to="pgConnState.reset_redirect_link">{{ pgConnState.footer_link_forgot_pswd_title }}</NuxtLink>
            </li>
        </header>
        <v-form class="form">
            <div>
                <div>
                    <label>Identifiant</label>
                    <input type="text" v-model="login.username" />
                </div>
                <div>
                    <label>Mot de passe</label>
                    <input type="password" v-model="login.pswd" />
                </div>
                <div>
                    <button @click="userLogin" >Valider</button>
                </div>
                <div v-if="loginForm.form_rst.result !== 'NO_SEND'">
                    {{ loginForm.form_rst.msg }}
                </div>
            </div>

        </v-form>
    </div>
</template>

<script setup lang="ts">
import { AppResultForm } from "../../model";
import { _val0, _val_false_invalid_User, _val_true, IN_APP_URL } from '../../util';

        // Check les champs de validation et message d'erreur
        //OK -> // Envoie login et pswd sur server puis retour 
        //OK -> // Config msg d'erreur suite Retour du server 
        // Ajout Redirection Page d'erreur suite Retour Negatif du server avec les gestion d'reur serveur gérer
        // Config d'authentification token bearer avec expiration suite Retour positif du server => avec middeware ?, store avec pinia?
        // Ajout Redirection pour les applications suite Retour positif du server

    const pgConnState = useState(() => ({
            header_title_conn:'Connection utilisateur', 
            head_link_register_title:'s\'inscrire', 
            register_redirect_link: IN_APP_URL.PAGE.REGISTER,
            footer_link_forgot_pswd_title:'Mot de passe oublié',
            reset_redirect_link: IN_APP_URL.PAGE.RESET_CREDENTIAL,
            logIn: $auth.loggedIn
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

    const userLogin = async () => {
        if(login.username && login.pswd){
            await useFetch(IN_APP_URL.API.LOGIN, {method:'post', body: { username:login.username, password:login.pswd } })
            .then((res) => {
                const data = res.data.value
                console.log("Auth response => "+ JSON.stringify(data))
                if(data?.response) {
                    loginForm.form_rst = _val_true;
                }else{;
                    loginForm.form_rst = _val_false_invalid_User;
                }
            })
            .catch((err) => {
                //console.log('Err when Auth api return => ' +  JSON.stringify(err))
            })
        }
    }

    const resetForm =  loginForm.form_rst = _val0

    

</script>