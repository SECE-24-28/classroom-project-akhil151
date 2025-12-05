document.getElementById('busForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    clearErrors();
    
   
    const fullName = document.getElementById('fullName').value.trim();
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const fromCity = document.getElementById('fromCity').value.trim();
    const toCity = document.getElementById('toCity').value.trim();
    const travelDate = document.getElementById('travelDate').value;
    const busType = document.getElementById('busType').value;
    const numSeats = document.getElementById('numSeats').value;
    const boarding = document.querySelector('input[name="boarding"]:checked');
    const pickupTime = document.getElementById('pickupTime').value;
    const terms = document.getElementById('terms').checked;
    
    let isValid = true;
    
   
    if (fullName === '') {
        showError('nameError', 'Full name is required');
        isValid = false;
    } else if (fullName.length < 3) {
        showError('nameError', 'Name must be at least 3 characters');
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
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
    
    
    const phoneRegex = /^[0-9]{10}$/;
    if (phone === '') {
        showError('phoneError', 'Phone number is required');
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        showError('phoneError', 'Phone number must be 10 digits');
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
    
    
    if (fromCity === '') {
        showError('fromError', 'Departure city is required');
        isValid = false;
    } else if (fromCity.length < 2) {
        showError('fromError', 'Please enter a valid city name');
        isValid = false;
    }
    
    
    if (toCity === '') {
        showError('toError', 'Arrival city is required');
        isValid = false;
    } else if (toCity.length < 2) {
        showError('toError', 'Please enter a valid city name');
        isValid = false;
    } else if (toCity.toLowerCase() === fromCity.toLowerCase()) {
        showError('toError', 'Arrival city must be different from departure');
        isValid = false;
    }
    
    
    const today = new Date().toISOString().split('T')[0];
    if (travelDate === '') {
        showError('dateError', 'Travel date is required');
        isValid = false;
    } else if (travelDate < today) {
        showError('dateError', 'Travel date cannot be in the past');
        isValid = false;
    }
    
    
    if (busType === '') {
        showError('busTypeError', 'Please select a bus type');
        isValid = false;
    }
    
    
    if (numSeats === '' || numSeats < 1) {
        showError('seatsError', 'Please enter number of seats');
        isValid = false;
    } else if (numSeats > 5) {
        showError('seatsError', 'Maximum 5 seats allowed per booking');
        isValid = false;
    }
    
    if (!boarding) {
        showError('boardingError', 'Please select a boarding point');
        isValid = false;
    }
    
    
    if (pickupTime === '') {
        showError('timeError', 'Please select a pickup time');
        isValid = false;
    }
    
    
    if (!terms) {
        showError('termsError', 'You must accept the terms and conditions');
        isValid = false;
    }
    
    
    if (isValid) {
        const boardingPoint = boarding.value === 'centralStation' ? 'Central Bus Station' : 
                             boarding.value === 'airport' ? 'Airport Junction' : 'Main Road Stop';
        
        const successMsg = document.getElementById('successMessage');
        successMsg.textContent = `✓ Booking Successful! ${numSeats} seat(s) booked for ${fullName} from ${fromCity} to ${toCity} on ${travelDate} at ${pickupTime}. Boarding: ${boardingPoint}`;
        successMsg.classList.add('show');
        
        
        document.getElementById('busForm').reset();
        
        
        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 5000);
    }
});

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearError() {
  const errorMsg = document.getElementById('errorMessage');
  errorMsg.textContent = '';
  errorMsg.classList.remove('show');
}
