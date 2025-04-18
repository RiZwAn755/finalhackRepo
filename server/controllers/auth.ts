import {v4 as uuidv4} from 'uuid';
let model:any; //change this 

async function handleUserSignup(req: any,res : any){
    //signup logic
    return res.redirect('/');
}

async function handleUserSignin(req: any, res: any){
    //signin logic
    return res.redirect('/');
}

export {
    handleUserSignin,
    handleUserSignup
};