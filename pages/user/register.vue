<template>
    <div>
        <header>
            <h2> header_title_register </h2>
            <NuxtLink to="/user/login">link_conn</NuxtLink>
        </header>
        <div class="form">
            <form>
                <div>
                    <label>Email</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>username</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Mot de passe</label>
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
            <!-- <div v-if="register_form_success">
               Inscription réalisé avec succes
            </div> -->
        </div>
    </div>
</template>