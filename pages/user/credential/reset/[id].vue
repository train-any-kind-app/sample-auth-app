<template>
    <div>
        <div> <h2> header_title_reset </h2></div>
        <div><a>link_con</a></div>
        <div class="form">
            <form>
                <div>
                    <label>Actuel mot de passe</label>
                    <input type="password"/>
                </div>
                <div>
                    <label>Nouveau mot de passe</label>
                    <input type="password"/>
                </div>
                <div>
                    <label>Confirmation du mot de passe</label>
                    <input type="password"/>
                </div>
                <div>
                    <button>Valider</button>
                </div>
            </form>
            <!-- <div v-if="reset_pswd_form_success">
                Mot de passe reinitialisé avec succes
            </div> -->
        </div>
    </div>
</template>

<script setup>
  const {id} = useRoute().params
</script>