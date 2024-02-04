const fetchButton = document.getElementById('fetch');
const createButton = document.getElementById('create');
const backButton = document.getElementById('back');
const updateButton = document.getElementById('update');
const patchButton = document.getElementById('patch');
const deleteButton = document.getElementById('delete');
const deleteAllButton = document.getElementById('delete-all');
const container = document.getElementById('container');

fetchButton.addEventListener('click', () => {
	document.getElementById("fetch-account").style.display = "block";
	document.getElementById("update-account").style.display = "none";
	document.getElementById("patch-account").style.display = "none";
	document.getElementById("delete-account-by-id").style.display = "none";
	document.getElementById("delete-all-account").style.display = "none";

    clearAllField();
	container.classList.add("right-panel-active");
});

createButton.addEventListener('click', () => {

    clearAllField();
	container.classList.remove("right-panel-active");
});

backButton.addEventListener('click', () => {

    clearAllField();
	container.classList.remove("right-panel-active");
});

updateButton.addEventListener('click', () => {
	document.getElementById("fetch-account").style.display = "none";
	document.getElementById("update-account").style.display = "block";
	document.getElementById("patch-account").style.display = "none";
	document.getElementById("delete-account-by-id").style.display = "none";
	document.getElementById("delete-all-account").style.display = "none";

    clearAllField();
	container.classList.add("right-panel-active");
});

patchButton.addEventListener('click', () => {
	document.getElementById("fetch-account").style.display = "none";
	document.getElementById("update-account").style.display = "none";
	document.getElementById("patch-account").style.display = "block";
	document.getElementById("delete-account-by-id").style.display = "none";
	document.getElementById("delete-all-account").style.display = "none";

    clearAllField();
	container.classList.add("right-panel-active");
});


deleteButton.addEventListener('click', () => {
	document.getElementById("fetch-account").style.display = "none";
	document.getElementById("update-account").style.display = "none";
	document.getElementById("patch-account").style.display = "none";
	document.getElementById("delete-account-by-id").style.display = "block";
	document.getElementById("delete-all-account").style.display = "none";

    clearAllField();
	container.classList.add("right-panel-active");
});

deleteAllButton.addEventListener('click', () => {
	document.getElementById("fetch-account").style.display = "none";
	document.getElementById("update-account").style.display = "block";
	document.getElementById("patch-account").style.display = "none";
	document.getElementById("delete-account-by-id").style.display = "none";
	document.getElementById("delete-all-account").style.display = "block";

    clearAllField();
	container.classList.add("right-panel-active");
});





function clearAllField() {
    document.getElementById('error-message').innerText = '';
    document.getElementById('error-message-update').innerText = '';
    document.getElementById('error-message-patch').innerText = '';
    document.getElementById('error-message-delete').innerText = '';

    //Create
    $('#fullName').val('');
    $('#state').val('');
    $('#bankName').val('');
    $('#ifscCode').val('');
    $('#accountType').val('');
    $('#accountNumber').val('');
    $('#amount').val('');


    //Fetch
    $('#userIdInput').val('');
    $('#fullNameFetch').val('');
    $('#stateFetch').val('');
    $('#bankNameFetch').val('');
    $('#ifscCodeFetch').val('');
    $('#accountTypeFetch').val('');
    $('#accountNumberFetch').val('');
    $('#amountFetch').val('');


    //Update
    $('#userIdUpdate').val('');
    $('#fullNameUpdate').val('');
    $('#stateUpdate').val('');
    $('#bankNameUpdate').val('');
    $('#ifscCodeUpdate').val('');
    $('#accountTypeUpdate').val('');
    $('#accountNumberUpdate').val('');
    $('#amountUpdate').val('');


    //Patch
    $('#userIdPatch').val('');
    $('#fullNamePatch').val('');
    $('#statePatch').val('');
    $('#bankNamePatch').val('');
    $('#ifscCodePatch').val('');
    $('#accountTypePatch').val('');
    $('#accountNumberPatch').val('');
    $('#amountPatch').val('');

    //Delete by ID
    $('#userIdDelete').val('');
}


// Create User Input Validation
// Input Alphabetical only on name field
$('#fullName').on('input', function () {

    var inputValue = $(this).val();

    // Remove any non-alphabetic and non-space characters using a regular expression
    var alphabeticValue = inputValue.replace(/[^A-Za-z ]/g, '');

    // Update the input field with the cleaned alphabetic value
    $(this).val(alphabeticValue);
});

// Input Alphabetical only on state field
$('#state').on('input', function () {

    var inputValue = $(this).val();

    // Remove any non-alphabetic and non-space characters using a regular expression
    var alphabeticValue = inputValue.replace(/[^A-Za-z ]/g, '');

    // Update the input field with the cleaned alphabetic value
    $(this).val(alphabeticValue);
});

// Input Alphabetical only on bankName field
$('#bankName').on('input', function () {

    var inputValue = $(this).val();

    // Remove any non-alphabetic and non-space characters using a regular expression
    var alphabeticValue = inputValue.replace(/[^A-Za-z ]/g, '');

    // Update the input field with the cleaned alphabetic value
    $(this).val(alphabeticValue);
});


// Input Alphabetical only on bankName field
$('#bankName').on('input', function () {

    var inputValue = $(this).val();

    // Remove any non-alphabetic and non-space characters using a regular expression
    var alphabeticValue = inputValue.replace(/[^A-Za-z ]/g, '');

    // Update the input field with the cleaned alphabetic value
    $(this).val(alphabeticValue);
});


// Input Alphabetical only on bankName field
$('#accountType').on('input', function () {

    var inputValue = $(this).val();

    // Remove any non-alphabetic characters using a regular expression
    var alphabeticValue = inputValue.replace(/[^A-Za-z ]/g, '');

    // Update the input field with the cleaned alphabetic value
    $(this).val(alphabeticValue);
});

// Input Alphabetical only on ifscCode field
$('#ifscCode').on('input', function () {

    var inputValue = $(this).val();

    // Remove any non-alphanumeric characters using a regular expression
    var alphanumericValue = inputValue.replace(/[^A-Za-z0-9 ]/g, '');

    // Update the input field with the cleaned alphanumeric value
    $(this).val(alphanumericValue);
});

// Input Number only on account field
$('#accountNumber').on('input', function () {

    var inputValue = $(this).val();

    // Removing any non-numeric characters using a regular expression
    var numericValue = inputValue.replace(/[^0-9]/g, '');

    // Update the input field with the cleaned numeric value
    $(this).val(numericValue);
});

// Input number only on amount field
$('#amount').on('input', function () {

    var inputValue = $(this).val();

    // Removing any non-numeric characters using a regular expression
    var numericValue = inputValue.replace(/[^0-9]/g, '');

    // Update the input field with the cleaned numeric value
    $(this).val(numericValue);
});


// FETCH
// ID
$('#userIdInput').on('input', function () {

    var inputValue = $(this).val();

    // Removing any non-numeric characters using a regular expression
    var numericValue = inputValue.replace(/[^0-9]/g, '');

    // Update the input field with the cleaned numeric value
    $(this).val(numericValue);
});

// Update User Input Validation
// Input Number only on id field
$('#userIdUpdate').on('input', function () {

    var inputValue = $(this).val();

    // Removing any non-numeric characters using a regular expression
    var numericValue = inputValue.replace(/[^0-9]/g, '');

    // Update the input field with the cleaned numeric value
    $(this).val(numericValue);
});

// Input Alphabetical only on name field
$('#fullNameUpdate').on('input', function () {

    var inputValue = $(this).val();

    // Remove any non-alphabetic and non-space characters using a regular expression
    var alphabeticValue = inputValue.replace(/[^A-Za-z ]/g, '');

    // Update the input field with the cleaned alphabetic value
    $(this).val(alphabeticValue);
});

// Input Alphabetical only on state field
$('#stateUpdate').on('input', function () {

    var inputValue = $(this).val();

    // Remove any non-alphabetic and non-space characters using a regular expression
    var alphabeticValue = inputValue.replace(/[^A-Za-z ]/g, '');

    // Update the input field with the cleaned alphabetic value
    $(this).val(alphabeticValue);
});

// Input Alphabetical only on bankName field
$('#bankNameUpdate').on('input', function () {

    var inputValue = $(this).val();

    // Remove any non-alphabetic and non-space characters using a regular expression
    var alphabeticValue = inputValue.replace(/[^A-Za-z ]/g, '');

    // Update the input field with the cleaned alphabetic value
    $(this).val(alphabeticValue);
});


// Input Alphabetical only on bankName field
$('#bankNameUpdate').on('input', function () {

    var inputValue = $(this).val();

    // Remove any non-alphabetic and non-space characters using a regular expression
    var alphabeticValue = inputValue.replace(/[^A-Za-z ]/g, '');

    // Update the input field with the cleaned alphabetic value
    $(this).val(alphabeticValue);
});


// Input Alphabetical only on bankName field
$('#accountTypeUpdate').on('input', function () {

    var inputValue = $(this).val();

    // Remove any non-alphabetic characters using a regular expression
    var alphabeticValue = inputValue.replace(/[^A-Za-z ]/g, '');

    // Update the input field with the cleaned alphabetic value
    $(this).val(alphabeticValue);
});

// Input Alphabetical only on ifscCode field
$('#ifscCodeUpdate').on('input', function () {

    var inputValue = $(this).val();

    // Remove any non-alphanumeric characters using a regular expression
    var alphanumericValue = inputValue.replace(/[^A-Za-z0-9 ]/g, '');

    // Update the input field with the cleaned alphanumeric value
    $(this).val(alphanumericValue);
});

// Input Number only on account field
$('#accountNumberUpdate').on('input', function () {

    var inputValue = $(this).val();

    // Removing any non-numeric characters using a regular expression
    var numericValue = inputValue.replace(/[^0-9]/g, '');

    // Update the input field with the cleaned numeric value
    $(this).val(numericValue);
});

// Input number only on amount field
$('#amountUpdate').on('input', function () {

    var inputValue = $(this).val();

    // Removing any non-numeric characters using a regular expression
    var numericValue = inputValue.replace(/[^0-9]/g, '');

    // Update the input field with the cleaned numeric value
    $(this).val(numericValue);
});






// Patch User Input Validation
// Input Number only on id field
$('#userIdPatch').on('input', function () {

    var inputValue = $(this).val();

    // Removing any non-numeric characters using a regular expression
    var numericValue = inputValue.replace(/[^0-9]/g, '');

    // Update the input field with the cleaned numeric value
    $(this).val(numericValue);
});

// Input Alphabetical only on name field
$('#fullNamePatch').on('input', function () {

    var inputValue = $(this).val();

    // Remove any non-alphabetic and non-space characters using a regular expression
    var alphabeticValue = inputValue.replace(/[^A-Za-z ]/g, '');

    // Update the input field with the cleaned alphabetic value
    $(this).val(alphabeticValue);
});

// Input Alphabetical only on state field
$('#statePatch').on('input', function () {

    var inputValue = $(this).val();

    // Remove any non-alphabetic and non-space characters using a regular expression
    var alphabeticValue = inputValue.replace(/[^A-Za-z ]/g, '');

    // Update the input field with the cleaned alphabetic value
    $(this).val(alphabeticValue);
});

// Input Alphabetical only on bankName field
$('#bankNamePatch').on('input', function () {

    var inputValue = $(this).val();

    // Remove any non-alphabetic and non-space characters using a regular expression
    var alphabeticValue = inputValue.replace(/[^A-Za-z ]/g, '');

    // Update the input field with the cleaned alphabetic value
    $(this).val(alphabeticValue);
});


// Input Alphabetical only on bankName field
$('#bankNamePatch').on('input', function () {

    var inputValue = $(this).val();

    // Remove any non-alphabetic and non-space characters using a regular expression
    var alphabeticValue = inputValue.replace(/[^A-Za-z ]/g, '');

    // Update the input field with the cleaned alphabetic value
    $(this).val(alphabeticValue);
});


// Input Alphabetical only on bankName field
$('#accountTypePatch').on('input', function () {

    var inputValue = $(this).val();

    // Remove any non-alphabetic characters using a regular expression
    var alphabeticValue = inputValue.replace(/[^A-Za-z ]/g, '');

    // Update the input field with the cleaned alphabetic value
    $(this).val(alphabeticValue);
});

// Input Alphabetical only on ifscCode field
$('#ifscCodePatch').on('input', function () {

    var inputValue = $(this).val();

    // Remove any non-alphanumeric characters using a regular expression
    var alphanumericValue = inputValue.replace(/[^A-Za-z0-9 ]/g, '');

    // Update the input field with the cleaned alphanumeric value
    $(this).val(alphanumericValue);
});

// Input Number only on account field
$('#accountNumberPatch').on('input', function () {

    var inputValue = $(this).val();

    // Removing any non-numeric characters using a regular expression
    var numericValue = inputValue.replace(/[^0-9]/g, '');

    // Update the input field with the cleaned numeric value
    $(this).val(numericValue);
});

// Input number only on amount field
$('#amountPatch').on('input', function () {

    var inputValue = $(this).val();

    // Removing any non-numeric characters using a regular expression
    var numericValue = inputValue.replace(/[^0-9]/g, '');

    // Update the input field with the cleaned numeric value
    $(this).val(numericValue);
});

// DELETE by ID
$('#userIdDelete').on('input', function () {

    var inputValue = $(this).val();

    // Removing any non-numeric characters using a regular expression
    var numericValue = inputValue.replace(/[^0-9]/g, '');

    // Update the input field with the cleaned numeric value
    $(this).val(numericValue);
});

function validateForm() {
    // Get values from input fields
    var fullName = $('#fullName').val();
    var state = $('#state').val();
    var bankName = $('#bankName').val();
    var ifscCode = $('#ifscCode').val();
    var accountType = $('#accountType').val();
    var accountNumber = $('#accountNumber').val();
    var amount = $('#amount').val();

    // Check for null or empty values in all fields
    if (!fullName || !state || !bankName || !ifscCode || !accountType || !accountNumber || !amount) {
        // Display an error message
        document.getElementById('error-message').innerText = 'Please fill in all fields.';
        return false; // Return false to prevent form submission
    }
    if (accountNumber.length !== 10) {
        // Display an error message
        document.getElementById('error-message').innerText = 'Account number must be 10 digit long.';
    }
    else {
        // Clear any previous error message
        document.getElementById('error-message').innerText = '';
        return true; // Allow form submission
    }
}

function validateUpdateForm() {
    // Get values from input fields
    var id = $('#userIdUpdate').val();
    var fullName = $('#fullNameUpdate').val();
    var state = $('#stateUpdate').val();
    var bankName = $('#bankNameUpdate').val();
    var ifscCode = $('#ifscCodeUpdate').val();
    var accountType = $('#accountTypeUpdate').val();
    var accountNumber = $('#accountNumberUpdate').val();
    var amount = $('#amountUpdate').val();

    // Check for null or empty values in all fields
    if (!id || !fullName || !state || !bankName || !ifscCode || !accountType || !accountNumber || !amount) {
        // Display an error message
        document.getElementById('error-message-update').innerText = 'Please fill in all fields.';
        return false; // Return false to prevent form submission
    }
    if (accountNumber.length !== 10) {
        // Display an error message
        document.getElementById('error-message-update').innerText = 'Account number must be 10 digit long.';
    }
    else {
        // Clear any previous error message
        document.getElementById('error-message-update').innerText = '';
        return true; // Allow form submission
    }
}


function validatePatchForm() {
    // Get values from input fields
    var id = $('#userIdPatch').val();
    var fullName = $('#fullNamePatch').val();
    var state = $('#statePatch').val();
    var bankName = $('#bankNamePatch').val();
    var ifscCode = $('#ifscCodePatch').val();
    var accountType = $('#accountTypePatch').val();
    var accountNumber = $('#accountNumberPatch').val();
    var amount = $('#amountPatch').val();

    // Check for null or empty values in all fields
    if (fullName || state || bankName || ifscCode || accountType || accountNumber || amount) {
        // Clear any previous error message
        document.getElementById('error-message-patch').innerText = '';
        return true; // Allow form submission
    }
    else {
        // Display an error message
        document.getElementById('error-message-patch').innerText = 'Please fill any one fields.';
        return false; // Return false to prevent form submission
    }
}

function validateDeleteForm() {
    // Get values from input fields
    var id = $('#userIdDelete').val();


    // Check for null or empty values in all fields
    if (!id) {
        // Display an error message
        document.getElementById('error-message-delete').innerText = 'Please enter ID';
        return false; // Return false to prevent form submission
    }
    else {
        // Clear any previous error message
        document.getElementById('error-message-delete').innerText = '';
        return true; // Allow form submission

    }
}


function submitForm() {

    if (validateForm()) {
        var formData = {
            fullName: $('#fullName').val(),
            state: $('#state').val(),
            bankName: $('#bankName').val(),
            ifscCode: $('#ifscCode').val(),
            accountType: $('#accountType').val(),
            accountNumber: $('#accountNumber').val(),
            amount: $('#amount').val(),

        };

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/add-user',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(response) {
                console.log('Success:', response);
                alert('User added successfully!');

                // Clear all input fields
                clearAllField();

                // Handle success
            },
            error: function(error) {
                console.error('Error:', error);
                // Handle error
            }
        });
    }
}


async function fetchAndDisplayUserData(){
    //clearAllField();
    var userId = $('#userIdInput').val();

    const res=await fetch(`/user/${userId}`);
    const data=await res.json();
    //console.log(data);
    //console.log(res);
    if (res.ok) {
            //const data = await res.json();
            const { accountNumber, accountType, amount, bankName, fullName, id, ifscCode, state } = data;

            $('#fullNameFetch').val(fullName);
            $('#stateFetch').val(state);
            $('#bankNameFetch').val(bankName);
            $('#ifscCodeFetch').val(ifscCode);
            $('#accountTypeFetch').val(accountType);
            $('#accountNumberFetch').val(accountNumber);
            $('#amountFetch').val(amount);
    } else {
        // If the response status is not OK, display an alert
        alert('User not found. Please check the user ID.');
        clearAllField();
    }
}


//Update User


function updateUser() {
    if (validateUpdateForm()) {
        var userId = $('#userIdUpdate').val();
        var fullName = $('#fullNameUpdate').val();
        var state = $('#stateUpdate').val();
        var bankName = $('#bankNameUpdate').val();
        var ifscCode = $('#ifscCodeUpdate').val();
        var accountType = $('#accountTypeUpdate').val();
        var accountNumber = $('#accountNumberUpdate').val();
        var amount = $('#amountUpdate').val();

        // Create an object with the updated user data
        var updatedUserData = {
            id: userId,
            fullName: fullName,
            state: state,
            bankName: bankName,
            ifscCode: ifscCode,
            accountType: accountType,
            accountNumber: accountNumber,
            amount: amount
        };

        //AJAX request to update the user data
        $.ajax({
            type: 'PUT',
            url: '/update-user/' + userId,
            contentType: 'application/json',
            data: JSON.stringify(updatedUserData),
            success: function(response) {
                console.log('User updated successfully:', response);

                // Clear the input fields after a successful update
                // Not Working Now

                // Success Message
                alert('User updated successfully!');


                // Clear all input fields
                clearAllField();

            },
            error: function(error) {
                console.error('Error updating user data:', error);
                // display an error message
                alert('Error updating user data: ' + error.statusText);
            }
        });
    }
}



//Patch User Data
function patchUser() {
    if(validatePatchForm()){
        var userId = $('#userIdPatch').val();

        // Create an object with the fields to be patched
        var patchedUserData = {
            fullName: $('#fullNamePatch').val(),
            state: $('#statePatch').val(),
            bankName: $('#bankNamePatch').val(),
            ifscCode: $('#ifscCodePatch').val(),
            accountType: $('#accountTypePatch').val(),
            accountNumber: $('#accountNumberPatch').val(),
            amount: $('#amountPatch').val()
        };

        // AJAX request to patch the user data
        $.ajax({
            type: 'PATCH',
            url: '/patch-user/' + userId,
            contentType: 'application/json',
            data: JSON.stringify(patchedUserData),
            success: function(response) {
                console.log('User patched successfully:', response);

                // success message
                clearAllField();
                alert('User patched successfully!');
            },
            error: function(error) {
                console.error('Error patching user data:', error);
                // error message
                alert('Error patching user data: ' + error.statusText);
            }
        });

    }
}




//Delete User By ID
function deleteUser() {
    if(validateDeleteForm()){
        var userId = $('#userIdDelete').val();

        // AJAX request to delete the user data
        $.ajax({
            type: 'DELETE',
            url: '/delete-user/' + userId,
            success: function(response) {
                console.log('User deleted successfully:', response);

                // clear the input field or display a success message
                clearAllField();
                alert('User deleted successfully!');
            },
            error: function(error) {
                console.error('Error deleting user data:', error);

                // display an error message
                alert('Error deleting user data: ' + error.statusText);
            }
        });
    }
}



//Delete all user
function deleteAllUsers() {
    // AJAX request to delete all user data
    $.ajax({
        type: 'DELETE',
        url: '/delete-all-users',
        success: function(response) {
            console.log('All users deleted successfully:', response);

            // display a success message
            alert('All users deleted successfully!');
        },
        error: function(error) {
            console.error('Error deleting all user data:', error);

            // display an error message
            alert('Error deleting all user data: ' + error.statusText);
        }
    });
}