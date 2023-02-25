import { EmailValidatorClassAdapter } from "./validation/email-validator-class-adapter";
import { emailValidatorFnAdapter } from "./validation/email-validator-fn-adapter";
import { EmailValidatorFnProtocol, EmailValidatorProtocol } from "./validation/email-validator-protocol";

function validaEmailClass(emailValidator: EmailValidatorProtocol, email: string): void {
    if (emailValidator.isEmail(email)) {
        console.log('E-mail é válido (CLASS)');
    } else {
        console.log('E-mail é inválido (CLASS)');
    }
}

function validaEmailFn(emailValidator: EmailValidatorFnProtocol, email: string): void {
    if (emailValidator(email)) {
        console.log('E-mail é válido (FN)');
    } else {
        console.log('E-mail é inválido (FN)');
    }
}

const email = 'moisesbreno7@gmail.com';
validaEmailClass(new EmailValidatorClassAdapter(), email);
validaEmailFn(emailValidatorFnAdapter, email);