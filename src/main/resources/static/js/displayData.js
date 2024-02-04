// displayData.js

function fetchDataAndUpdateTable() {
    // Fetch data from the server
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/user', // Replace with your API endpoint
        dataType: 'json',
        success: function (data) {
            updateTable(data);
        },
        error: function (error) {
            console.error('Error fetching data:', error);
        }
    });
}

function updateTable(data) {
    // Clear existing table data
    $('#dataTable thead').empty();
    $('#dataTable tbody').empty();

    // Populate table headers
    var headers = Object.keys(data[0]);
    var headerRow = '<tr>';
    headers.forEach(function (header) {
        headerRow += '<th>' + header + '</th>';
    });
    headerRow += '</tr>';
    $('#dataTable thead').append(headerRow);

    // Populate table rows
    data.forEach(function (entry) {
        var row = '<tr>';
        headers.forEach(function (header) {
            row += '<td>' + entry[header] + '</td>';
        });
        row += '</tr>';
        $('#dataTable tbody').append(row);
    });
}

// Initial fetch when the page loads
fetchDataAndUpdateTable();

// Optionally, you can set up a timer to periodically fetch and update data
setInterval(fetchDataAndUpdateTable, 5000); // Update every 5 seconds (adjust as needed)


function handleSearch() {
    var searchTerm = $('#searchInput').val().toLowerCase();
    var tableRows = $('#dataTable tbody tr');

    tableRows.each(function() {
        var rowText = $(this).text().toLowerCase();
        if (rowText.includes(searchTerm)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

// Attach an event listener to the search input field
$('#searchInput').on('input', handleSearch);