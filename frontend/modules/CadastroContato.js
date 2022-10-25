import validator from "validator";

export default class Cadastro {
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
        const labelNome = el.querySelector('label');
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        if (nomeInput.value.length === 0) {
            const p = document.createElement('p');
            let errorMessage = document.createTextNode(`Nome precisa ser preenchido! `);
            p.appendChild(errorMessage);
            p.classList.add('erro');
            p.classList.add('alert-danger');
            p.classList.add('p2');
            labelNome.before(p);
            error = true;
        }

        console.log(!telefoneInput.value.length === 0)
        console.log(validator.isEmail(emailInput.value))

        if (validator.isEmail(emailInput.value) || telefoneInput.value.length > 0) {
            el.submit()
        }
        else {
            const p = document.createElement('p');
            let errorMessage = document.createTextNode(`Email ou telefone precisa ser preenchido!`);
            p.appendChild(errorMessage);
            p.classList.add('erro');
            p.classList.add('alert-danger');
            p.classList.add('p2');
            labelNome.before(p);
            error = true;
        }

        if (!error) el.submit();

    }
}