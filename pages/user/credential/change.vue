<template>
    <div>
        <div> 
            <h2> header_title_change </h2>
        </div>
        <div> 
            <h2> {{ user.username }} </h2>
        </div>
        <div>
            <NuxtLink :to="pgChangeState.connect_redirect_link">{{ pgChangeState.head_link_conn_title }}</NuxtLink>
        </div>
        <div class="form">
            <form>
                <div>
                    <label>Nouveau mot de passe</label>
                    <input type="password" v-model="changeCred.pswdActual"/>
                </div>
                <div>
                    <label>Nouveau mot de passe</label>
                    <input type="password" v-model="changeCred.pswdNew"/>
                </div>
                <div>
                    <label>Confirmation du mot de passe</label>
                    <input type="password" v-model="changeCred.pswdNew2"/>
                </div>
                <div>
                    <button @click="userChangeCredential">Valider</button>
                </div>
            </form>
            <!-- <div v-if="change_pswd_form_success">
                Mot de passe modifier avec succes
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { IN_APP_URL, _val0 } from "./../../../util";

 const pgChangeState = useState(() => ({
        header_title_register:'Changement de mot de passe de l\'utilisateur', 
        head_link_conn_title:'Se connecter', 
        connect_redirect_link: IN_APP_URL.PAGE.LOGIN,
    })
);
const changeCred = reactive({
    pswdActual: '',
    pswdNew: '',
    pswdNew2: '',
})
const changeCredForm = reactive({ 
        form_rst: _val0,
        form_error_msg: ''
});
const user = reactive({
    username: ''
})

const userChangeCredential = async () => {
        let passwordSameCheck1, passwordSameCheck2  = false;
        if(changeCred.pswdActual && changeCred.pswdNew) {
            passwordSameCheck1 = changeCred.pswdNew != changeCred.pswdActual
        };

        if(changeCred.pswdNew && changeCred.pswdNew2) {
            passwordSameCheck2 = changeCred.pswdNew == changeCred.pswdNew2
        };

        if(passwordSameCheck1 == true && passwordSameCheck2 == true){
            await useFetch(IN_APP_URL.API.CHANGE_CREDENTIAL, { method:'put', 
                    body: {
                        updateCase: 'change',
                        userId: 0,
                        usr: '',
                        previousPassword: changeCred.pswdActual,
                        newPassword: changeCred.pswdNew
                    } 
            })
            .then((res) => {
                const {data, error} = res
                console.log("Auth data response => "+ JSON.stringify(data.value))
                const dataValue = data.value;
                // if(dataValue?.response && dataValue?.response.createUser == true) {
                //     changeCredForm.form_rst = _val_register_true;
                // }else if(dataValue?.response?.userError != ''){
                //     changeCredForm.form_rst = _val_false_exist_User;
                // }
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