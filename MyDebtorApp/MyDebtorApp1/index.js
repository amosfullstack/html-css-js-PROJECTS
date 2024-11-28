document.addEventListener("DOMContentLoaded", () => {
    const calculatorBtn = document.getElementById('calculator-btn');
    const debtorsBtn = document.getElementById('debtors-btn');
    const settingsBtn = document.getElementById('settings-btn');
    const calculatorModal = document.getElementById('calculator-modal');
    const debtorsModal = document.getElementById('debtors-modal');
    const settingsModal = document.getElementById('settings-modal');
    const closeCalculator = document.getElementById('close-calculator');
    const closeDebtors = document.getElementById('close-debtors');
    const closeSettings = document.getElementById('close-settings');
    const settingsForm = document.getElementById('settings-form');
    const companyNameDisplay = document.getElementById('company-name');
    const activeLanguageDisplay = document.getElementById('active-language');
    const timerDisplay = document.getElementById('timer');
    const debtorsSection = document.getElementById('debtors-section');
    const addDebtorBtn = document.getElementById('add-debtor-btn');
    const addDebtorModal = document.getElementById('add-debtor-modal');
    const closeAddDebtor = document.getElementById('close-add-debtor');
    const addDebtorForm = document.getElementById('add-debtor-form');
    const debtorsTableBody = document.getElementById('debtors-table').querySelector('tbody');
    
    let timer;
    let timeRemaining = 1000; // 2 minutes

    calculatorBtn.addEventListener('click', () => {
        calculatorModal.style.display = 'flex';
    });

    debtorsBtn.addEventListener('click', () => {
        debtorsModal.style.display = 'flex';
    });

    settingsBtn.addEventListener('click', () => {
        settingsModal.style.display = 'flex';
    });

    closeCalculator.addEventListener('click', () => {
        calculatorModal.style.display = 'none';
    });

    closeSettings.addEventListener('click', () => {
        settingsModal.style.display = 'none';
    });

    closeAddDebtor.addEventListener('click', () => {
        addDebtorModal.style.display = 'none';
    });

    closeDebtors.addEventListener('click', () => {
        debtorsModal.style.display = 'none';
    });

    addDebtorBtn.addEventListener('click', () => {
        addDebtorModal.style.display = 'flex';
    });

    settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const language = document.getElementById('language').value;
        const companyName = document.getElementById('company-name-input').value;

        localStorage.setItem('language', language);
        localStorage.setItem('companyName', companyName);

        companyNameDisplay.textContent = companyName;
        activeLanguageDisplay.textContent = language === 'en' ? 'English' : 'Swahili';
        settingsModal.style.display = 'none';
    });

    const updateTimer = () => {
        if (timeRemaining <= 0) {
            alert('Trial duration expired, please purchase the software');
            document.body.innerHTML = '<h1>Trial expired</h1>';
            return;
        }
        timeRemaining -= 1;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    timer = setInterval(updateTimer, 2000);

    // Calculator functionality
    const calculator = document.getElementById('calculator');
    const history = document.getElementById('history');
    const calculatorDisplay = document.createElement('input');
    calculatorDisplay.setAttribute('type', 'text');
    calculatorDisplay.setAttribute('readonly', true);
    calculator.appendChild(calculatorDisplay);
    
    const buttons = [
        '7', '8', '9', '/', 
        '4', '5', '6', '*', 
        '1', '2', '3', '-', 
        '0', '.', '=', '+', 
        'C'
    ];
    
    buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.textContent = button;
        btn.addEventListener('click', () => handleCalculatorInput(button));
        calculator.appendChild(btn);
    });
    
    let currentInput = '';
    let operationsHistory = [];
    
    function handleCalculatorInput(input) {
        if (input === 'C') {
            currentInput = '';
            calculatorDisplay.value = currentInput;
        } else if (input === '=') {
            try {
                const result = eval(currentInput);
                operationsHistory.push(`${currentInput} = ${result}`);
                if (operationsHistory.length > 5) {
                    operationsHistory.shift();
                }
                updateHistory();
                currentInput = result;
            } catch (e) {
                currentInput = 'Error';
            }
            calculatorDisplay.value = currentInput;
        } else {
            currentInput += input;
            calculatorDisplay.value = currentInput;
        }
    }
    
    function updateHistory() {
        history.innerHTML = '';
        operationsHistory.forEach(op => {
            const historyItem = document.createElement('div');
            historyItem.textContent = op;
            historyItem.addEventListener('click', () => {
                currentInput = op.split(' = ')[0];
                calculatorDisplay.value = currentInput;
            });
            history.appendChild(historyItem);
        });
    }

    const savedLanguage = localStorage.getItem('language');
    const savedCompanyName = localStorage.getItem('companyName');
    
    if (savedLanguage) {
        activeLanguageDisplay.textContent = savedLanguage === 'en' ? 'English' : 'Swahili';
        document.getElementById('language').value = savedLanguage;
    }

    if (savedCompanyName) {
        companyNameDisplay.textContent = savedCompanyName;
        document.getElementById('company-name-input').value = savedCompanyName;
    }

    addDebtorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const debtorName = document.getElementById('debtor-name').value;
        const debtorAmount = document.getElementById('debtor-amount').value;
        const debtorDueDate = document.getElementById('debtor-due-date').value;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${debtorName}</td>
            <td>${debtorAmount}</td>
            <td>${debtorDueDate}</td>
        `;
        debtorsTableBody.appendChild(row);
        addDebtorModal.style.display = 'none';
    });
});
