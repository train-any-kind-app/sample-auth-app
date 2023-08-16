<template>
    <div>
        <header>
            <h2> {{ pgRegisterState.header_title_register }} </h2>
            <NuxtLink :to="pgRegisterState.connect_redirect_link">{{ pgRegisterState.head_link_conn_title }}</NuxtLink>
        </header>
        <div class="form">
            <div>
                <div>
                    <label>Email</label>
                    <input type="text" v-model="register.email" required/>
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" v-model="register.username" required/>
                </div>
                <div>
                    <label>Nom</label>
                    <input type="text" v-model="register.lastname"/>
                </div>
                <div>
                    <label>Prenom</label>
                    <input type="text" v-model="register.firstname"/>
                </div>
                <div>
                    <label>Mot de passe</label>
                    <input type="password" v-model="register.pswd" required/>
                </div>
                <div>
                    <label>Confirmation du mot de passe</label>
                    <input type="password" 
                    v-model="register.pswd2" required/>
                </div>
                <div>
                    <button @click="userRegister">Valider</button>
                </div>
            </div>
            <div class="error-form" v-if="registerForm.form_rst.result != 'NO_SEND'">
                <p>{{ registerForm.form_rst.msg }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { _val0, _val_false_invalid_User, _val_false_exist_User, _val_register_true, IN_APP_URL } from "./../../util";

        // Check les champs de validation et message d'erreur
        //OK -> // Envoie login et pswd sur server puis retour 
        //OK -> // Config msg d'erreur suite Retour du server 
        // Ajout Redirection Page d'erreur suite Retour Negatif du server avec les gestion d'reur serveur gérer
        // Config d'authentification token bearer avec expiration suite Retour positif du server => avec middeware ?, store avec pinia?
        // Ajout Redirection  la connexion suite Retour positif du server
        // Config message pour Notification sur les applications suite Retour positif du server
    const pgRegisterState = useState(() => ({
        header_title_register:'Inscription utilisateur', 
        head_link_conn_title:'Se connecter', 
        connect_redirect_link: IN_APP_URL.PAGE.LOGIN,
    })
    );
    const register = reactive({
        email: '',
        username: '',
        lastname:'',
        firstname:'',
        pswd: '',
        pswd2: '',
    })
    const registerForm = reactive({ 
            form_rst: _val0,
            form_error_msg: ''
    });
    const userRegister = async () => {
        let passwordSameCheck = false;
        if(register.pswd && register.pswd2) passwordSameCheck = register.pswd == register.pswd2;

        if(register.username && register.email && register.pswd && passwordSameCheck==true){
            await useFetch(IN_APP_URL.API.REGISTER, { method:'post', 
                    body: { 
                        username: register.username, 
                        email: register.email,
                        firstname: register.firstname,
                        lastname: register.lastname,
                        password: register.pswd
                    } 
            })
            .then((res) => {
                const {data, error} = res
                console.log("Auth data response => "+ JSON.stringify(data.value))
                const dataValue = data.value;
                if(dataValue?.response && dataValue?.response.createUser == true) {
                    registerForm.form_rst = _val_register_true;
                }else if(dataValue?.response?.userError != ''){
                    registerForm.form_rst = _val_false_exist_User;
                    //registerForm.form_rst.msg = registerForm.form_rst.msg;
                }
                if(error){
                    console.log("Auth data Error=> "+ JSON.stringify(error))
                }
            })
            .catch((err) => {
                console.log('Err when Auth api return => ' +  JSON.stringify(err))
            })
        }
    }

</script>
