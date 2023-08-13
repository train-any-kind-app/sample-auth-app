
import { _val_false_No_User } from './../../util';
export default defineEventHandler((event) => {
    console.log("FROM Api => "+ JSON.stringify(event.path));
    const body  = readBody(event);
    console.log("FROM Api => body "+ JSON.stringify(body));
    return {res: _val_false_No_User};
});