document.getElementById('movieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
   
    clearErrors();
    
   
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const movie = document.getElementById('movie').value;
    const showDate = document.getElementById('showDate').value;
    const showTime = document.getElementById('showTime').value;
    const tickets = document.getElementById('tickets').value;
    const seatType = document.querySelector('input[name="seatType"]:checked');
    const terms = document.getElementById('terms').checked;
    
    let isValid = true;
    
    
    if (fullName === '') {
        showError('nameError', 'Name is required');
        isValid = false;
    } else if (fullName.length < 3) {
        showError('nameError', 'Name must be at least 3 characters');
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
        showError('nameError', 'Name can only contain letters and spaces');
        isValid = false;
    }
    
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    
    const phoneRegex = /^[0-9]{10}$/;
    if (phone === '') {
        showError('phoneError', 'Phone number is required');
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        showError('phoneError', 'Phone number must be 10 digits');
        isValid = false;
    }
    
    
    if (movie === '') {
        showError('movieError', 'Please select a movie');
        isValid = false;
    }
    
    
    const today = new Date().toISOString().split('T')[0];
    if (showDate === '') {
        showError('dateError', 'Date is required');
        isValid = false;
    } else if (showDate < today) {
        showError('dateError', 'Please select today or a future date');
        isValid = false;
    }
    
    
    if (showTime === '') {
        showError('timeError', 'Please select a show time');
        isValid = false;
    }
    
    
    if (tickets === '' || tickets < 1) {
        showError('ticketsError', 'Please enter number of tickets');
        isValid = false;
    } else if (tickets > 10) {
        showError('ticketsError', 'Maximum 10 tickets allowed');
        isValid = false;
    }
    
    
    if (!seatType) {
        showError('seatError', 'Please select a seat type');
        isValid = false;
    }
    
    
    if (!terms) {
        showError('termsError', 'You must accept the terms and conditions');
        isValid = false;
    }
    
    
    if (isValid) {
        const successMsg = document.getElementById('successMessage');
        successMsg.textContent = `✓ Booking Successful! ${tickets} ticket(s) for ${movie} on ${showDate} at ${showTime}`;
        successMsg.classList.add('show');
        
        
        document.getElementById('movieForm').reset();
        
        
        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 5000);
    }
});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
}

