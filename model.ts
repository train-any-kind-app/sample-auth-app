
//export type RESULT_FORM_SEND = 'NO_SEND'| 'SUCCES' | 'FAIL';
export interface  AppResultForm {
    result:'NO_SEND'| 'SUCCES' | 'FAIL',
    msg?: string
}