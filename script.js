const preKnownDiagnoses = ['Stroke', 'Cough', 'Fever', 'Diabetes', 'Hypertension'];
const preKnownOrders = ['Paracetamol', 'Ibuprofen', 'Aspirin', 'Amoxicillin'];

function startConsultation() {
    window.location.href = 'consultation.html';
}

function showDiagnosisInput() {
    const diagnosisContainer = document.getElementById('diagnosis-container');
    diagnosisContainer.style.display = 'block';
    const diagnosisChecklist = document.getElementById('diagnosis-checklist');
    diagnosisChecklist.innerHTML = '';
    preKnownDiagnoses.forEach(diagnosis => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = diagnosis;
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(diagnosis));
        
        diagnosisChecklist.appendChild(label);
        diagnosisChecklist.appendChild(document.createElement('br'));
    });

    const customDiagnosisDropdown = document.getElementById('custom-diagnosis-dropdown');
    customDiagnosisDropdown.innerHTML = '<option value="">Select a custom diagnosis</option>';
    preKnownDiagnoses.forEach(diagnosis => {
        const option = document.createElement('option');
        option.value = diagnosis;
        option.textContent = diagnosis;
        customDiagnosisDropdown.appendChild(option);
    });
}

function showOrderInput() {
    const ordersContainer = document.getElementById('orders-container');
    ordersContainer.style.display = 'block';
    const orderChecklist = document.getElementById('order-checklist');
    orderChecklist.innerHTML = '';
    preKnownOrders.forEach(order => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = order;
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(order));

        const plusButton = document.createElement('button');
        plusButton.className = 'plus-button';
        plusButton.textContent = '+';
        plusButton.onclick = () => editOrder(checkbox);

        label.appendChild(plusButton);
        orderChecklist.appendChild(label);
        orderChecklist.appendChild(document.createElement('br'));
    });
}

function addCustomDiagnosis() {
    const customDiagnosisDropdown = document.getElementById('custom-diagnosis-dropdown');
    const customDiagnosis = customDiagnosisDropdown.value;
    if (customDiagnosis) {
        const diagnosesList = document.getElementById('diagnoses-list');
        const listItem = document.createElement('li');
        listItem.textContent = customDiagnosis;
        listItem.ondblclick = () => editItem(listItem);
        diagnosesList.appendChild(listItem);
        customDiagnosisDropdown.value = '';
    }
}

function saveDiagnosis() {
    const diagnosesList = document.getElementById('diagnoses-list');
    const checkboxes = document.querySelectorAll('#diagnosis-checklist input:checked');
    checkboxes.forEach(checkbox => {
        const listItem = document.createElement('li');
        listItem.textContent = checkbox.value;
        listItem.ondblclick = () => editItem(listItem);
        diagnosesList.appendChild(listItem);
        checkbox.checked = false;
    });
}

function saveOrder() {
    const ordersList = document.getElementById('orders-list');
    const checkboxes = document.querySelectorAll('#order-checklist input:checked');
    checkboxes.forEach(checkbox => {
        const listItem = document.createElement('li');
        listItem.textContent = checkbox.value;
        ordersList.appendChild(listItem);
        checkbox.checked = false;
    });
}

function editOrder(checkbox) {
    const newOrder = prompt('Edit order:', checkbox.value);
    if (newOrder) {
        checkbox.value = newOrder;
        checkbox.nextSibling.nodeValue = newOrder;
    }
}

function editDiagnosis(checkbox) {
    const newDiagnosis = prompt('Edit diagnosis:', checkbox.value);
    if (newDiagnosis) {
        checkbox.value = newDiagnosis;
        checkbox.nextSibling.nodeValue = newDiagnosis;
    }
}

function editItem(listItem) {
    const newItem = prompt('Edit item:', listItem.firstChild.textContent);
    if (newItem) {
        listItem.firstChild.textContent = newItem;
    }
}

function sendToEHR() {
    alert('Information sent to EHR.');
}
