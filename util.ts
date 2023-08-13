import { AppResultForm } from './model';

const _formConError = {
    error_form_sended_no_user_msg: 'L\'identifiant ne correspond à aucun utilisteur enrgistré',
    error_form_sended_invalid_user_msg: 'L\'identifiant ou mot de passe est incorect'
} 

export const _val0: AppResultForm = {result:'NO_SEND'}
export const _val_true: AppResultForm = {result:'SUCCES', msg:'Connection reussi'}
export const _val_false_No_User: AppResultForm = {result:'FAIL', msg: _formConError.error_form_sended_no_user_msg}
export const _val_false_invalid_User: AppResultForm = {result:'FAIL', msg: _formConError.error_form_sended_no_user_msg}