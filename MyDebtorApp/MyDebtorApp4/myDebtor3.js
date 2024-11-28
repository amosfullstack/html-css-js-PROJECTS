document.addEventListener("DOMContentLoaded", function () {
    const companyNameInput = document.getElementById('company-name-input');
    const companyNameDisplay = document.getElementById('company-name');
    const languageSelect = document.getElementById('language');
    const activeLanguage = document.getElementById('active-language');
    const settingsForm = document.getElementById('settings-form');

    const calculatorModal = document.getElementById('calculator-modal');
    const calculatorBtn = document.getElementById('calculator-btn');
    const closeCalculatorBtn = document.getElementById('close-calculator');
    
    const settingsModal = document.getElementById('settings-modal');
    const settingsBtn = document.getElementById('settings-btn');
    const closeSettingsBtn = document.getElementById('close-settings');
    
    const debtorsModal = document.getElementById('debtors-modal');
    const debtorsBtn = document.getElementById('debtors-btn');
    const closeDebtorsBtn = document.getElementById('close-debtors');
    
    const addDebtorModal = document.getElementById('add-debtor-modal');
    const addDebtorBtn = document.getElementById('add-debtor-btn');
    const closeAddDebtorBtn = document.getElementById('close-add-debtor');
    const addDebtorForm = document.getElementById('add-debtor-form');
    const debtorsTableBody = document.querySelector('#debtors-table tbody');
    
    let history = [];
    
    // Display the company name from localStorage
    companyNameDisplay.textContent = localStorage.getItem('companyName') || 'Company Name';
    
    // Display the active language from localStorage
    activeLanguage.textContent = localStorage.getItem('language') || 'English';
    
    // Load the saved language and company name into the settings form
    companyNameInput.value = localStorage.getItem('companyName') || '';
    languageSelect.value = localStorage.getItem('language') || 'en';
    
    // Handle the settings form submission
    settingsForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const companyName = companyNameInput.value;
        const language = languageSelect.value;
        localStorage.setItem('companyName', companyName);
        localStorage.setItem('language', language);
        companyNameDisplay.textContent = companyName;
        activeLanguage.textContent = language === 'en' ? 'English' : 'Swahili';
        settingsModal.style.display = 'none';
    });
    
    // Handle the calculator modal
    calculatorBtn.addEventListener('click', function () {
        calculatorModal.style.display = 'block';
        loadCalculator();
    });
    closeCalculatorBtn.addEventListener('click', function () {
        calculatorModal.style.display = 'none';
    });
    
    // Handle the settings modal
    settingsBtn.addEventListener('click', function () {
        settingsModal.style.display = 'block';
    });
    closeSettingsBtn.addEventListener('click', function () {
        settingsModal.style.display = 'none';
    });
    
    // Handle the debtors modal
    debtorsBtn.addEventListener('click', function () {
        debtorsModal.style.display = 'block';
        loadDebtors();
    });
    closeDebtorsBtn.addEventListener('click', function () {
        debtorsModal.style.display = 'none';
    });
    
    // Handle the add debtor modal
    addDebtorBtn.addEventListener('click', function () {
        addDebtorModal.style.display = 'block';
    });
    closeAddDebtorBtn.addEventListener('click', function () {
        addDebtorModal.style.display = 'none';
    });
    
    // Handle the add debtor form submission
    addDebtorForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(addDebtorForm);
        const newDebtor = {};
        formData.forEach((value, key) => {
            newDebtor[key] = value;
        });
        addDebtor(newDebtor);
        addDebtorModal.style.display = 'none';
    });
    
    function loadCalculator() {
        const calculator = document.getElementById('calculator');
        calculator.innerHTML = '';
        const buttons = [
            '7', '8', '9', '/', 
            '4', '5', '6', '*', 
            '1', '2', '3', '-', 
            '0', '.', '=', '+',
            'C'
        ];
        
        buttons.forEach(button => {
            const buttonElement = document.createElement('button');
            buttonElement.textContent = button;
            buttonElement.addEventListener('click', () => handleCalculatorInput(button));
            calculator.appendChild(buttonElement);
        });
    }
    
    function handleCalculatorInput(input) {
        const calculator = document.getElementById('calculator');
        const display = document.getElementById('calculator-display');
        
        if (!display) {
            const displayElement = document.createElement('div');
            displayElement.id = 'calculator-display';
            displayElement.textContent = '';
            displayElement.style.gridColumn = 'span 4';
            calculator.insertBefore(displayElement, calculator.firstChild);
        }
        
        const currentDisplay = display.textContent;
        
        if (input === 'C') {
            display.textContent = '';
        } else if (input === '=') {
            try {
                const result = eval(currentDisplay);
                addHistory(currentDisplay + ' = ' + result);
                display.textContent = result;
            } catch (error) {
                display.textContent = 'Error';
            }
        } else {
            display.textContent += input;
        }
    }
    
    function addHistory(entry) {
        history.push(entry);
        const historyDiv = document.getElementById('history');
        const historyEntry = document.createElement('div');
        historyEntry.textContent = entry;
        historyDiv.appendChild(historyEntry);
    }
    
    function loadDebtors() {
        // Load debtors from localStorage and populate the table
        const debtors = JSON.parse(localStorage.getItem('debtors')) || [];
        debtorsTableBody.innerHTML = '';
        debtors.forEach(debtor => {
            const row = document.createElement('tr');
            Object.values(debtor).forEach(value => {
                const cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });
            debtorsTableBody.appendChild(row);
        });
    }
    
    function addDebtor(debtor) {
        const debtors = JSON.parse(localStorage.getItem('debtors')) || [];
        debtors.push(debtor);
        localStorage.setItem('debtors', JSON.stringify(debtors));
        loadDebtors();
    }
});
