
class Field {
    errors: string[];
    input: HTMLInputElement;

    constructor(input: HTMLInputElement) {
        this.input = input;
        this.errors = [];

        let errorMessage = document.createElement('p');
        errorMessage.className = 'text-danger';
        this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);

        this.input.addEventListener('input', () => {
            this.errors = [];
            this.validate();
            errorMessage.innerText = this.errors[0] || '';
        });
    }

    validate() {
        // validaciones anteriores
    }
}

function requiredFieldDecorator(field: Field): Field {
    let validate = field.validate;

    field.validate = function() {
        validate();
        let value = field.input.value;
        if (!value) {
            field.errors.push('Requerido');
        }
    };

    return field;
}

function emailFieldDecorator(field: Field): Field {
    let validate = field.validate;

    field.validate = function() {
        validate();
        let value = field.input.value;
        // if (!~value.indexOf('@')){ // en lugar de decir === -1
        //     field.errors.push('Debe ser un email');
        // }
        let rgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!rgx.test(value.toLowerCase())) {
            field.errors.push('Debe ser un email');
        }
    };

    return field;
}


let field = new Field(document.querySelector('#email'));
field = requiredFieldDecorator(field); // el orden es importante
field = emailFieldDecorator(field);