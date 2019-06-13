let user1 = { 'name': 'Кайрат', 'surname': 'Нуртас' };
let user2 = { 'name': 'Дмитрий', 'surname': 'Шамраев' };
let user3 = { 'name': 'Максим', 'surname': 'Дунайцев' };
let user4 = { 'name': 'Владислав', 'surname': 'Борзунов' };
let users = [user1, user2, user3, user4];
let number = users.length;

const addRow = (number, element, row) => {
    const elementName = document.createTextNode(element.name);
    const elementSurname = document.createTextNode(element.surname);
    const elementNumber = document.createTextNode(number)

    const dataName = document.createElement("td");
    const dataSurname = document.createElement("td");
    const dataNumber = document.createElement("td");

    dataNumber.appendChild(elementNumber);
    dataName.appendChild(elementName);
    dataSurname.appendChild(elementSurname);

    row.appendChild(dataNumber);
    row.appendChild(dataName);
    row.appendChild(dataSurname);
    document.getElementById('table').appendChild(row);
};


const fillTable = (array) => {
    for (let i = 0; i < array.length; i++) {
        let number = i + 1;
        const element = array[i];
        const row = document.createElement("tr");
        addRow(number, element, row);
    }

};



const addElement = (user) => {
    number++;
    const row = document.createElement("tr");

    addRow(number, user, row);
};


const addNurbot = () => {

    let user5 = { 'name': 'pekabot', 'surname': 'Nurbolatov' };
    addElement(user5);

};


const deleteNurtable = () => {
    var elem = document.getElementById('nurtable');
    elem.parentNode.removeChild(elem);

};


const createNurtable = () => {
    number = 0;
    var codeBlock = '<table class="table" id="nurtable"><thead><tr><th scope="col">Номер</th><th scope="col">Имя</th><th scope="col">Фамилия</th></tr></thead><tbody id="table"></tbody></table>';

    document.getElementById("wrapper").innerHTML = codeBlock;
};

const addElementInput = (event) => {
    event.preventDefault();
    const form = document.getElementById("nurForm");

    if (form.reportValidity()) {
    const nameForm = document.getElementById("nameForm").value;
    const surnameForm = document.getElementById("surnameForm").value;
    const user = { 'name': nameForm, 'surname': surnameForm };
    addElement(user);
    document.getElementById("nameForm").value = "";
    document.getElementById("surnameForm").value = "";
    }
};
