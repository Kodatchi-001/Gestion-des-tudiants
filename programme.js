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
        else if(parseInt(All_input[2].value) < 14 || parseInt(All_input[2].value) > 24){
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
            <button onclick="Modifier()"><i class='bx bx-refresh'></i></button>
            <button onclick="Suprimmer(this)"><i class='bx bxs-trash-alt' ></i></button>
            </td>
        `;
        content.appendChild(row);
        All_input[0].value = "";
        All_input[1].value = "";
        All_input[2].value = "";
        All_input[3].value = "";
        All_input[4].value = "";
        textarea_adresse.value = "";
    }
}

function Suprimmer(x) {
    x.parentNode.parentNode.remove()
}