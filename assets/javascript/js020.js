document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const successMessageDiv = document.getElementById('successMessage');
    const showFormButton = document.getElementById('showFormButton');
    const errorMessages = document.querySelectorAll('.error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        let isValid = true;

        // Reset all error messages
        errorMessages.forEach(error => error.textContent = '');

        // Validation functions (can be expanded)
        function isEmpty(value) {
            return value.trim() === '';
        }

        function isNameValid(name) {
            return /^[A-Za-z\s]+$/.test(name);
        }

        function isEmailValid(email) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(email);
        }

        function isValidDOB(dob) {
            if (!dob) return false;
        
            const birthYear = new Date(dob).getFullYear();
            const currentYear = new Date().getFullYear();
        
            // Calculate the user's age
            const age = currentYear - birthYear;
        
            // Check if age is between 18 and 30 years
            return age >= 18 && age <= 30;
        }


        function isPhoneValid(phone) {
            return /^(\+91)?[6-9]\d{9}$/.test(phone);
        }

        function isAlphabetOnly(value) {
            return /^[A-Za-z\s]+$/.test(value);
        }

        function isCheckboxGroupChecked(name) {
            return document.querySelectorAll(`input[name="${name}"]:checked`).length > 0;
        }


        // Validate "Your name"
        if (isEmpty(form.name.value)) {
            document.getElementById('nameError').textContent = 'Please enter your name';
            isValid = false;
        } else if (!isNameValid(form.name.value)) {
            document.getElementById('nameError').textContent = 'Name should contain only letters and spaces';
            isValid = false;
        }
      

        // Validate "Email"
        if (isEmpty(form.email.value)) {
            document.getElementById('emailError').textContent = 'Please enter your email';
            isValid = false;
        } else if (!isEmailValid(form.email.value)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email format.';
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }

        // Validate "Gender"
        if (!isCheckboxGroupChecked('gender')) {
            document.getElementById('genderError').textContent = 'Please select your gender';
            isValid = false;
        }

        // Validate "Date of birth"
        if (isEmpty(form.dob.value)) {
            document.getElementById('dobError').textContent = 'Please enter your DOB';
            isValid = false;
        } else if (!isValidDOB(form.dob.value)) {
            document.getElementById('dobError').textContent = 'You must be between 18 and 30 years old';
            isValid = false;
        } else {
            document.getElementById('dobError').textContent = '';
        }

        // Validate "Mobile"
        if (isEmpty(form.phone.value)) {
            document.getElementById('phoneError').textContent = 'Phone number is required';
            isValid = false;
        } else if (!isPhoneValid(form.phone.value)) {
            document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number starting with 6 – 9, with or without +91';
            isValid = false;
        }

        form.phone.addEventListener('input', function () {
            this.value = this.value.replace(/[^+\d]/g, '');
        });


        // Validate "Address"
        if (isEmpty(form.address.value)) {
            document.getElementById('addressError').textContent = 'Please enter your address';
            isValid = false;
        }

        // Validate "City"
        if (form.city.value === '') {
            document.getElementById('cityError').textContent = 'Please select your city';
            isValid = false;
        }

        // Validate "Country"
        if (isEmpty(form.country.value)) {
            document.getElementById('countryError').textContent = 'Please enter your country';
            isValid = false;
        } else if (!isAlphabetOnly(form.country.value)) {
            document.getElementById('countryError').textContent = 'Country should contain only letters and spaces';
            isValid = false;
        }

        // Validate "Expertise"
        if (!isCheckboxGroupChecked('expertise')) {
            document.getElementById('expertiseError').textContent = 'Please select atleast one expertise';
            isValid = false;
        }

        // Validate "Group"
        if (isEmpty(form.group.value)) {
            document.getElementById('groupError').textContent = 'Please enter your group';
            isValid = false;
        }

        if (isValid) {
            form.style.display = 'none';
            successMessageDiv.style.display = 'block';
        }
    });

    showFormButton.addEventListener('click', function() {
        form.style.display = 'block';
        successMessageDiv.style.display = 'none';
    });
});



/*
if (!isSelectChecked('group')) {
            document.getElementById('groupError').textContent = 'Please assign atleast one group';
            isValid = false;
        }*/
       