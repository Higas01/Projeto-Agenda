import validator from "validator";

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init = () => {
        this.events();
    }

    events = () => {
        if (!this.form) return;
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            this.validate(event);
        })
    }

    validate = event => {
        const erros = document.querySelectorAll('.erro');
        for (let p of erros) {
            p.remove();
        };
        const el = event.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;

        if (!validator.isEmail(emailInput.value)) {
            const p = document.createElement('p');
            let errorMessage = document.createTextNode(`E-mail inválido`);
            p.appendChild(errorMessage);
            p.classList.add('erro');
            p.classList.add('alert-danger');
            p.classList.add('p2');
            emailInput.after(p);
            error = true;
        }
        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            const p = document.createElement('p');
            let errorMessage = document.createTextNode(`Senha precisa ter entre 3 a 50 caracterias`);
            p.appendChild(errorMessage);
            p.classList.add('erro');
            p.classList.add('alert-danger');
            p.classList.add('p2');
            passwordInput.after(p);
            error = true;
        }

        if (!error) el.submit();

    }
}