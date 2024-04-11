document.addEventListener('DOMContentLoaded', function () {
    const inputFields = document.querySelectorAll('input[type="text"]');
    const tooltips = document.querySelectorAll('.asterisk_input');
    const form = document.getElementById('taxForm');
    // Hide all tooltips initially
    tooltips.forEach(asterisk_input  => {
        asterisk_input .style.display = 'none';
    });

    inputFields.forEach((inputField, index) => {
        inputField.addEventListener('input', function () {
            const inputValue = inputField.value.trim();

            if (/[^0-9]/.test(inputValue)) {
                tooltips[index].style.display = 'inline'; // Show the tooltip
            } else {
                tooltips[index].style.display = 'none'; // Hide the tooltip
            }
        });
    });

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission for demonstration

    let isValid = true;

    inputFields.forEach((inputField, index) => {
        const inputValue = inputField.value.trim();

        if (/[^0-9]/.test(inputValue)) {
            tooltips[index].style.display = 'inline'; // Show the tooltip
            isValid = false;
        }
    });

    if (isValid) {
        calculateTax(); // Calculate tax only if all inputs are valid
    } else {
        alert("Enter number inputs only!!");
        // Clear tooltips after 1 second if form is not valid
        setTimeout(() => {
            tooltips.forEach(tooltip => {
                tooltip.style.display = 'none';
            });
        }, 1000);
        clearInputs();
    }
});
});


function closeModal() {
    document.getElementById('modal').style.display = 'none';
    clearInputs();
}
function clearInputs() {
    document.getElementById('grossIncome').value = ''; // Clear gross income input
    document.getElementById('extraIncome').value = ''; // Clear extra income input
    document.getElementById('deductions').value = ''; // Clear deductions input
    document.getElementById('ageGroup').selectedIndex = 0; // Reset age group dropdown
}

function formatIndianRupees(amount) {
    // Convert the amount to a string and split it into integer and decimal parts
    const parts = amount.toString().split('.');
    let integerPart = parts[0];
    const decimalPart = parts.length > 1 ? '.' + parts[1] : '';

    // Add commas to the integer part for Indian rupee formatting
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return integerPart + decimalPart;
}
function calculateTax() {
    const grossIncome = parseFloat(document.getElementById('grossIncome').value) || 0;
    const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
    const deductions = parseFloat(document.getElementById('deductions').value) || 0;
    const ageGroup = document.getElementById('ageGroup').value;

    let tax = 0;
    if (grossIncome + extraIncome - deductions > 800000) {
        if (ageGroup === '<40') {
            tax = 0.3 * (grossIncome + extraIncome - deductions - 800000);
        } else if (ageGroup === '>=40 & <60') {
            tax = 0.4 * (grossIncome + extraIncome - deductions - 800000);
        } else if (ageGroup === '>=60') {
            tax = 0.1 * (grossIncome + extraIncome - deductions - 800000);
        }
    }
    const taxAmount = formatIndianRupees(((grossIncome+extraIncome-deductions)-tax.toFixed(0)));
    const taxText = 'after tax deductions';

    document.getElementById('taxResult').innerHTML = `
      <div style="text-align: center;">${taxAmount}</div>
      <div style="text-align: center; margin-top: 10px;">${taxText}</div>
    `;
    document.getElementById('taxResult').style.fontWeight = 'bold';

    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
}

// Call clearInputs() when closing the modal
document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});
