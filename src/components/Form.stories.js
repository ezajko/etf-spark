// ETF UNSA - Form Components Stories
// Author: Ernedin Zajko <ezajko@root.ba>
// License: GPL-2.0-or-later

export default {
    title: 'Components/Forms',
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'textarea', 'select', 'checkbox', 'radio'],
            description: 'Input type',
        },
        label: {
            control: 'text',
            description: 'Form label',
        },
        placeholder: {
            control: 'text',
            description: 'Input placeholder',
        },
        helpText: {
            control: 'text',
            description: 'Help text below input',
        },
        required: {
            control: 'boolean',
            description: 'Is field required',
        },
    },
};

const createFormGroup = ({ type, label, placeholder, helpText, required }) => {
    const requiredAttr = required ? 'required' : '';
    const requiredLabel = required ? '<span class="text-danger">*</span>' : '';

    let inputHtml = '';

    if (type === 'textarea') {
        inputHtml = `<textarea class="form-control" id="formInput" placeholder="${placeholder}" ${requiredAttr}></textarea>`;
    } else if (type === 'select') {
        inputHtml = `
      <select class="form-select" id="formInput" ${requiredAttr}>
        <option value="">Izaberite...</option>
        <option value="1">Opcija 1</option>
        <option value="2">Opcija 2</option>
        <option value="3">Opcija 3</option>
      </select>
    `;
    } else if (type === 'checkbox') {
        return `
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="formCheck" ${requiredAttr}>
        <label class="form-check-label" for="formCheck">
          ${label} ${requiredLabel}
        </label>
        ${helpText ? `<div class="form-text">${helpText}</div>` : ''}
      </div>
    `;
    } else if (type === 'radio') {
        return `
      <div>
        <label class="form-label">${label} ${requiredLabel}</label>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="radioGroup" id="radio1" ${requiredAttr}>
          <label class="form-check-label" for="radio1">Opcija 1</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="radioGroup" id="radio2">
          <label class="form-check-label" for="radio2">Opcija 2</label>
        </div>
        ${helpText ? `<div class="form-text">${helpText}</div>` : ''}
      </div>
    `;
    } else {
        inputHtml = `<input type="${type}" class="form-control" id="formInput" placeholder="${placeholder}" ${requiredAttr}>`;
    }

    return `
    <div class="mb-3">
      <label for="formInput" class="form-label">${label} ${requiredLabel}</label>
      ${inputHtml}
      ${helpText ? `<div class="form-text">${helpText}</div>` : ''}
    </div>
  `;
};

export const TextInput = {
    args: {
        type: 'text',
        label: 'Ime i prezime',
        placeholder: 'Unesite ime i prezime',
        helpText: 'Koristite puno ime.',
        required: false,
    },
    render: createFormGroup,
};

export const EmailInput = {
    args: {
        type: 'email',
        label: 'Email adresa',
        placeholder: 'ime@example.com',
        helpText: 'Nikada nećemo dijeliti vaš email.',
        required: true,
    },
    render: createFormGroup,
};

export const PasswordInput = {
    args: {
        type: 'password',
        label: 'Lozinka',
        placeholder: 'Unesite lozinku',
        helpText: 'Minimum 8 karaktera.',
        required: true,
    },
    render: createFormGroup,
};

export const TextArea = {
    args: {
        type: 'textarea',
        label: 'Poruka',
        placeholder: 'Unesite vašu poruku...',
        helpText: 'Maksimalno 500 karaktera.',
        required: false,
    },
    render: createFormGroup,
};

export const SelectDropdown = {
    args: {
        type: 'select',
        label: 'Odsjek',
        placeholder: '',
        helpText: 'Izaberite odsjek koji vas interesuje.',
        required: true,
    },
    render: createFormGroup,
};

export const Checkbox = {
    args: {
        type: 'checkbox',
        label: 'Slažem se sa uslovima korištenja',
        helpText: 'Potrebno je prihvatiti uslove.',
        required: true,
    },
    render: createFormGroup,
};

export const RadioButtons = {
    args: {
        type: 'radio',
        label: 'Ciklus studija',
        helpText: 'Izaberite jedan od ciklusa.',
        required: true,
    },
    render: createFormGroup,
};

// Complete form example
export const CompleteForm = {
    render: () => `
    <form style="max-width: 500px;">
      <h4 class="mb-3">Kontakt forma</h4>
      
      <div class="mb-3">
        <label for="nameInput" class="form-label">Ime i prezime <span class="text-danger">*</span></label>
        <input type="text" class="form-control" id="nameInput" required>
      </div>
      
      <div class="mb-3">
        <label for="emailInput" class="form-label">Email <span class="text-danger">*</span></label>
        <input type="email" class="form-control" id="emailInput" required>
      </div>
      
      <div class="mb-3">
        <label for="subjectSelect" class="form-label">Tema</label>
        <select class="form-select" id="subjectSelect">
          <option value="">Izaberite...</option>
          <option value="info">Opšte informacije</option>
          <option value="admission">Upis</option>
          <option value="program">Studijski programi</option>
        </select>
      </div>
      
      <div class="mb-3">
        <label for="messageTextarea" class="form-label">Poruka <span class="text-danger">*</span></label>
        <textarea class="form-control" id="messageTextarea" rows="4" required></textarea>
      </div>
      
      <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" id="privacyCheck" required>
        <label class="form-check-label" for="privacyCheck">
          Prihvatam politiku privatnosti <span class="text-danger">*</span>
        </label>
      </div>
      
      <button type="submit" class="btn btn-primary">Pošalji</button>
    </form>
  `,
};
