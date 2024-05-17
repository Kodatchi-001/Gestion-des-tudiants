const All_input = document.querySelectorAll('input');
const Select_sexe = document.querySelector('select');
const textarea_adresse = document.querySelector('textarea');
const content = document.querySelector('tbody');
const age_msg = document.getElementById('h5');
function Ajouter() {
    var valide = true;
    All_input.forEach(element => {
        if (element.value == "" || Select_sexe.value == "" || textarea_adresse.value == "") {
            element.style.border = '1px solid red';
            Select_sexe.style.border = '1px solid red';
            textarea_adresse.style.border = '1px solid red';
            valide = false;
        }
        else if (parseInt(All_input[2].value) < 14 || parseInt(All_input[2].value) > 24) {
            alert(`Votre Age ${All_input[2].value} doit être compris entre 14 et 24 ans.`)
            valide = false
        }
        else {
            element.style.border = '';
            Select_sexe.style.border = '';
            textarea_adresse.style.border = '';
        }
    })

    if (valide) {
        const info = {
            Prenom: All_input[0].value,
            Nom: All_input[1].value,
            Age: All_input[2].value,
            Sexe: Select_sexe.value,
            Date_Naissance: All_input[3].value,
            Email: All_input[4].value,
            Adresse: textarea_adresse.value
        };

        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${info.Prenom}</td>
            <td>${info.Nom}</td>
            <td>${info.Age}</td>
            <td>${info.Sexe}</td>
            <td>${info.Date_Naissance}</td>
            <td>${info.Email}</td>
            <td>${info.Adresse}</td>
            <td>
            <button onclick="Modifier(this)"><i class='bx bx-refresh'></i></button>
            <button onclick="Suprimmer(this)"><i class='bx bxs-trash-alt' ></i></button>
            </td>
        `;
        content.appendChild(row);
        All_input.forEach(element => {
            element.value = ""
        })
        textarea_adresse.value = "";
    }
}

function Suprimmer(x) {
    x.parentNode.parentNode.remove()
}

function Modifier(y) {
    var colms = y.parentNode.parentNode.cells;
    All_input[0].value = colms[0].textContent;
    All_input[1].value = colms[1].textContent;
    All_input[2].value = colms[2].textContent;
    Select_sexe.value = colms[3].textContent;
    All_input[3].value = colms[4].textContent;
    All_input[4].value = colms[5].textContent;
    textarea_adresse.value = colms[6].textContent;

    let button = document.getElementById('submitBtn')
    button.innerText = 'modifier'
    button.removeEventListener('click',Ajouter);

    button.addEventListener('click', function () {
        colms[0].textContent = All_input[0].value;
        colms[1].textContent = All_input[1].value;
        colms[2].textContent = All_input[2].value;
        colms[3].textContent = Select_sexe.value;
        colms[4].textContent = All_input[3].value;
        colms[5].textContent = All_input[4].value;
        colms[6].textContent = textarea_adresse.value;
        button.innerText = 'Ajouter'
        
        button.addEventListener('click',Ajouter);
    })
}
