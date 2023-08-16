import { AppResultForm } from './model';

const _formConError = {
    error_form_exist_user_msg: 'correspond à un utilisteur déja enregistré',
    error_form_sended_invalid_user_msg: 'L\'identifiant ou mot de passe est incorrect!'
} 

export const _val0: AppResultForm = {result:'NO_SEND'}
export const _val_true: AppResultForm = {result:'SUCCES', msg:'Connection reussi!'}
export const _val_register_true: AppResultForm = {result:'SUCCES', msg:'Inscription reussi!'}
export const _val_false_exist_User: AppResultForm = {result:'FAIL', msg: _formConError.error_form_exist_user_msg}
export const _val_false_invalid_User: AppResultForm = {result:'FAIL', msg: _formConError.error_form_sended_invalid_user_msg}

export const ERROR_CASE = {
    LOGIN_ERROR: {
        label:'LOGIN_ERROR', 
        title:'Problème au chargement de la page',
        message: 'Erreur survenu pendant une tentative d\'authentification. Retentez votre action, si l\'erreur persiste, vous pourrez vous reconnecter plus tard.'
    },
    DEFAULT_ERROR: {
        label:'DEFAULT_ERROR',
        title:'Problème au chargement de la page',
        message: 'Erreur survenu au chargement de la page. Retentez votre action, si l\'erreur persiste, veuillez patienter, le problème est en cours de résolution.'
    }
}

export const IN_APP_URL = {
    PAGE:{
        LOGIN: '/user/login',
        REGISTER: '/user/register',
        USER: '/user',
        CHANGE_CREDENTIAL: '/user/credential/change',
        RESET_CREDENTIAL: '/user/credential/reset'
    },
    API:{
        USER: '/api/user',
        LOGIN: '/api/user/login',
        REGISTER: '/api/user/register',
        CHANGE_CREDENTIAL: '/api/user/credential/update'
    }
}