document.getElementById('railwayForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
   
    clearErrors();
    
   
    const passengerName = document.getElementById('passengerName').value.trim();
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const fromStation = document.getElementById('fromStation').value.trim();
    const toStation = document.getElementById('toStation').value.trim();
    const journeyDate = document.getElementById('journeyDate').value;
    const trainClass = document.getElementById('trainClass').value;
    const numPassengers = document.getElementById('numPassengers').value;
    const idProof = document.getElementById('idProof').value;
    const terms = document.getElementById('terms').checked;
    
    let isValid = true;
    
    
    if (passengerName === '') {
        showError('nameError', 'Passenger name is required');
        isValid = false;
    } else if (passengerName.length < 3) {
        showError('nameError', 'Name must be at least 3 characters');
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(passengerName)) {
        showError('nameError', 'Name can only contain letters and spaces');
        isValid = false;
    }
    
    
    if (age === '' || age < 1) {
        showError('ageError', 'Please enter a valid age');
        isValid = false;
    } else if (age > 120) {
        showError('ageError', 'Age cannot exceed 120 years');
        isValid = false;
    }
    
   
    if (gender === '') {
        showError('genderError', 'Please select gender');
        isValid = false;
    }
    
   
    const mobileRegex = /^[0-9]{10}$/;
    if (mobile === '') {
        showError('mobileError', 'Mobile number is required');
        isValid = false;
    } else if (!mobileRegex.test(mobile)) {
        showError('mobileError', 'Mobile number must be 10 digits');
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
    
    
    if (fromStation === '') {
        showError('fromError', 'Departure station is required');
        isValid = false;
    } else if (fromStation.length < 2) {
        showError('fromError', 'Please enter a valid station name');
        isValid = false;
    }
    
    
    if (toStation === '') {
        showError('toError', 'Arrival station is required');
        isValid = false;
    } else if (toStation.length < 2) {
        showError('toError', 'Please enter a valid station name');
        isValid = false;
    } else if (toStation.toLowerCase() === fromStation.toLowerCase()) {
        showError('toError', 'Arrival station must be different from departure');
        isValid = false;
    }
    
    const today = new Date().toISOString().split('T')[0];
    if (journeyDate === '') {
        showError('dateError', 'Journey date is required');
        isValid = false;
    } else if (journeyDate < today) {
        showError('dateError', 'Journey date cannot be in the past');
        isValid = false;
    }
    
    
    if (trainClass === '') {
        showError('classError', 'Please select a class');
        isValid = false;
    }
    
    
    if (numPassengers === '' || numPassengers < 1) {
        showError('passengersError', 'Please enter number of passengers');
        isValid = false;
    } else if (numPassengers > 6) {
        showError('passengersError', 'Maximum 6 passengers allowed');
        isValid = false;
    }
    
    
    if (idProof === '') {
        showError('idError', 'Please select an ID proof type');
        isValid = false;
    }
    
    
    if (!terms) {
        showError('termsError', 'You must accept the terms and conditions');
        isValid = false;
    }
    
    
    if (isValid) {
        const successMsg = document.getElementById('successMessage');
        successMsg.textContent = `✓ Booking Successful! Ticket for ${passengerName} from ${fromStation} to ${toStation} on ${journeyDate}`;
        successMsg.classList.add('show');
        
        
        document.getElementById('railwayForm').reset();
        
        
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

