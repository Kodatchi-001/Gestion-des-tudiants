const body = document.querySelector('body');

const section = document.createElement('section');
section.classList.add('w-full', 'md:h-screen', 'flex', 'justify-between', 'p-4', 'lg:p-6', 'gap-8', 'md:gap-2', 'lg:gap-8', 'items-center', 'flex-wrap', 'lg:flex-nowrap');

//Card-1
const div_card_1 = document.createElement('div');
div_card_1.classList.add('w-full', 'md:w-[48%]', 'lg:w-[28%]', 'h-full', 'flex', 'items-start', 'flex-wrap', 'p-4', 'gap-1', 'lg:gap-0', 'lg:p-6', 'bg-white', 'rounded-2xl', 'cards');
div_card_1.style.boxShadow = '0px 0px 30px rgba(0, 0, 0, 0.322)';

//Tittle-Card-1
const div_card_1_tittle = document.createElement('h1');
div_card_1_tittle.classList.add('text-2xl', 'font-bold');
div_card_1_tittle.innerHTML = 'Ajouter Etudiant';

const form = document.createElement('form');
form.classList.add('w-full', 'h-[75%]', 'flex', 'flex-wrap', 'gap-2');

//Information-1
const form_div_1 = document.createElement('div');
form_div_1.classList.add('w-full', 'flex', 'flex-wrap', 'gap-1');

const label_prenom = document.createElement('label');
label_prenom.textContent = 'Prenom :';
label_prenom.classList.add('w-full');

const input_prenom = document.createElement('input');
input_prenom.classList.add('w-full', 'p-1', 'px-2', 'border', 'border-black');
input_prenom.setAttribute('type', 'text');
input_prenom.placeholder = 'Prenom';

form_div_1.appendChild(label_prenom);
form_div_1.appendChild(input_prenom);

//Information-2
const form_div_2 = document.createElement('div');
form_div_2.classList.add('w-full', 'flex', 'flex-wrap', 'gap-1');

const label_nom = document.createElement('label');
label_nom.textContent = 'Nom :';
label_nom.classList.add('w-full');

const input_nom = document.createElement('input');
input_nom.classList.add('w-full', 'p-1', 'px-2', 'border', 'border-black');
input_nom.setAttribute('type', 'text');
input_nom.placeholder = 'Nom';

form_div_2.appendChild(label_nom);
form_div_2.appendChild(input_nom);

//Information-3
const form_div_3 = document.createElement('div');
form_div_3.classList.add('w-full', 'flex', 'flex-wrap', 'gap-1');

const label_age = document.createElement('label');
label_age.textContent = 'Age :';
label_age.classList.add('w-full');

const input_age = document.createElement('input');
input_age.classList.add('w-full', 'p-1', 'px-2', 'border', 'border-black');
input_age.setAttribute('type', 'number');
input_age.placeholder = 'Age';

form_div_3.appendChild(label_age);
form_div_3.appendChild(input_age);

//Information-4
const form_div_4 = document.createElement('div');
form_div_4.classList.add('w-full', 'flex', 'flex-wrap', 'gap-1');

const label_sexe = document.createElement('label');
label_sexe.textContent = 'Sexe :';
label_sexe.classList.add('w-full');

const select_sexe = document.createElement('select');
select_sexe.classList.add('w-full', 'p-1', 'px-1', 'border', 'border-black');

const option_sexe_1 = document.createElement('option');
option_sexe_1.textContent = 'Masculin';
option_sexe_1.value = 'Masculin';

const option_sexe_2 = document.createElement('option');
option_sexe_2.textContent = 'Femin';
option_sexe_2.value = 'Femin';

select_sexe.appendChild(option_sexe_1);
select_sexe.appendChild(option_sexe_2);

form_div_4.appendChild(label_sexe);
form_div_4.appendChild(select_sexe);

//Information-5
const form_div_5 = document.createElement('div');
form_div_5.classList.add('w-full', 'flex', 'flex-wrap', 'gap-1');

const label_date = document.createElement('label');
label_date.textContent = 'Date :';
label_date.classList.add('w-full');

const input_date = document.createElement('input');
input_date.classList.add('w-full', 'p-1', 'px-2', 'border', 'border-black');
input_date.setAttribute('type', 'date');

form_div_5.appendChild(label_date);
form_div_5.appendChild(input_date);

//Information-6
const form_div_6 = document.createElement('div');
form_div_6.classList.add('w-full', 'flex', 'flex-wrap', 'gap-1');

const label_email = document.createElement('label');
label_email.textContent = 'Email :';
label_email.classList.add('w-full');

const input_email = document.createElement('input');
input_email.classList.add('w-full', 'p-1', 'px-2', 'border', 'border-black');
input_email.setAttribute('email', 'number');
input_email.placeholder = 'Email';

form_div_6.appendChild(label_email);
form_div_6.appendChild(input_email);

//Information-7
const form_div_7 = document.createElement('div');
form_div_7.classList.add('w-full', 'flex', 'flex-wrap', 'gap-1');

const label_adresse = document.createElement('label');
label_adresse.textContent = 'Adresse :';
label_adresse.classList.add('w-full');

const textarea_adresse = document.createElement('textarea');
textarea_adresse.classList.add('w-full', 'xl:h-[10vh]', 'xl:p-2', 'resize-none', 'border', 'border-black');
textarea_adresse.placeholder = 'Adresse';

form_div_7.appendChild(label_adresse);
form_div_7.appendChild(textarea_adresse);

//Button-Card
const Button = document.createElement('button');
Button.textContent = 'Ajouter'
Button.classList.add('w-full', 'p-3', 'mt-auto', 'rounded-lg', 'bg-gray-300');
Button.style = 'font-weight: 600';
Button.addEventListener('click', Ajouter);

//Append-Balise-Card-1
div_card_1.appendChild(div_card_1_tittle);

div_card_1.appendChild(form);
form.appendChild(form_div_1);
form.appendChild(form_div_2);
form.appendChild(form_div_3);
form.appendChild(form_div_4);
form.appendChild(form_div_5);
form.appendChild(form_div_6);
form.appendChild(form_div_7);

div_card_1.appendChild(Button);

//Card-2
const div_card_2 = document.createElement('div');
div_card_2.classList.add('w-full', 'md:w-[48%]', 'lg:w-[70%]', 'h-full', 'p-6', 'overflow-scroll', 'lg:overflow-hidden', 'bg-white', 'rounded-2xl', 'card-table', 'cards');
div_card_2.style.boxShadow = '0px 0px 30px rgba(0, 0, 0, 0.322)';

//Tittle-Card-2
const div_card_2_tittle = document.createElement('h1');
div_card_2_tittle.classList.add('text-2xl', 'font-bold');
div_card_2_tittle.innerHTML = 'Liste Des Etudiant';

//Table
var table = document.createElement('table');
table.classList.add('w-full', 'mt-8', 'bg-white');
table.style.boxShadow = '0px 0px 30px rgba(0, 0, 0, 0.153)';

const tr_1 = document.createElement('tr');

const th_prenom = document.createElement('th');
th_prenom.classList.add('p-2', 'bg-gray-300');
th_prenom.style.fontWeight = 'font-weight: 600';
th_prenom.textContent = 'Prenom';

const th_Nom = document.createElement('th');
th_Nom.classList.add('p-2', 'bg-gray-300');
th_Nom.style.fontWeight = 'font-weight: 600';
th_Nom.textContent = 'Nom';

const th_Age = document.createElement('th');
th_Age.classList.add('p-2', 'bg-gray-300');
th_Age.style.fontWeight = 'font-weight: 600';
th_Age.textContent = 'Age';

const th_sexe = document.createElement('th');
th_sexe.classList.add('p-2', 'bg-gray-300');
th_sexe.style.fontWeight = 'font-weight: 600';
th_sexe.textContent = 'Sexe';

const th_date = document.createElement('th');
th_date.classList.add('p-2', 'bg-gray-300');
th_date.style.fontWeight = 'font-weight: 600';
th_date.textContent = 'Date de Naissance';

const th_email = document.createElement('th');
th_email.classList.add('p-2', 'bg-gray-300');
th_email.style.fontWeight = 'font-weight: 600';
th_email.textContent = 'Email';

const th_adresse = document.createElement('th');
th_adresse.classList.add('p-2', 'bg-gray-300');
th_adresse.style.fontWeight = 'font-weight: 600';
th_adresse.textContent = 'Adresse';

const th_Actions = document.createElement('th');
th_Actions.classList.add('p-2', 'gap-8', 'bg-gray-300');
th_Actions.textContent = 'Actions';

//Append-Balise-Card-2
table.appendChild(tr_1);
tr_1.appendChild(th_prenom);
tr_1.appendChild(th_Nom);
tr_1.appendChild(th_Age);
tr_1.appendChild(th_sexe);
tr_1.appendChild(th_date);
tr_1.appendChild(th_email);
tr_1.appendChild(th_adresse);
tr_1.appendChild(th_Actions);

div_card_2.appendChild(div_card_2_tittle)
div_card_2.appendChild(table)

//Append-Balise-Body
body.appendChild(section);
section.appendChild(div_card_1);
section.appendChild(div_card_2);


//Function-Ajouter
function Ajouter() {
    var valide = true;

    //infromation-1
    if (input_prenom.value.trim() == '') {
        input_prenom.style.border = '1px solid red';
        valide = false
    }
    else {
        input_prenom.style.border = '';
    }
    //infromation-2
    if (input_nom.value.trim() == '') {
        input_nom.style.border = '1px solid red';
        valide = false
    }
    else {
        input_nom.style.border = '';
    }
    //infromation-3
    if (input_age.value.trim() == ''|| input_age.value < 18 ) {
        input_age.style.border = '1px solid red';
        alert('vous etes mineur');
        valide = false
    }
    else {
        input_age.style.border = '';
    }
    //infromation-5
    if (input_date.value.trim() == '') {
        input_date.style.border = '1px solid red';
        valide = false
    }
    else {
        input_date.style.border = '';
    }
    //infromation-6
    if (input_email.value.trim() == '') {
        input_email.style.border = '1px solid red';
        valide = false
    }
    else {
        input_email.style.border = '';
    }
    //infromation-7
    if (textarea_adresse.value.trim() == '') {
        textarea_adresse.style.border = '1px solid red';
        valide = false
    }
    else {
        textarea_adresse.style.border = '';
    }
    if (!valide) {
        window.alert('Remplir les informations')
    }
    else {
        const Information = {
            Prenom: input_prenom.value,
            Nom: input_nom.value,
            Age: input_age.value,
            Sexe: select_sexe.value,
            Date: input_date.value,
            Email: input_email.value,
            Adresse: textarea_adresse.value,
        }
        const tr_2 = document.createElement('tr')
        tr_2.innerHTML =
            `
        <td class="p-2 text-center">${Information.Prenom}</td>
        <td class="p-2 text-center">${Information.Nom}</td>
        <td class="p-2 text-center">${Information.Age}</td>
        <td class="p-2 text-center">${Information.Sexe}</td>
        <td class="p-2 text-center">${Information.Date}</td>
        <td class="p-2 text-center">${Information.Email}</td>
        <td class="p-2 text-center">${Information.Adresse}</td>
        <td class="p-2 text-center">
        <i class='bx bxs-edit-alt cursor-pointer scale-125 text-green-500'onclick='Modifier(this)'></i>
        <i class='bx bx-x cursor-pointer scale-150 text-red-500'onclick='Suprimmer(this)'></i>
        </td>
        `
        table.appendChild(tr_2);

        //Clear-all-input
        input_prenom.value = '';
        input_nom.value = '';
        input_age.value = '';
        input_date.value = '';
        input_email.value = '';
        textarea_adresse.value = '';
    }
}

//Function-Suprimmer
function Suprimmer(div) {
    div.parentNode.parentNode.remove()
}
