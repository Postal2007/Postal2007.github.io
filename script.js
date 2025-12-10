// Fetch data from a mock API 
/*document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')

    .then(response => response.json())

    .then(data => {

        //const tableBody = document.getElementById('json-table');
        const tableBody = document.querySelector('#json-table tbody')

        data.forEach(user => {
            /*const row = document.createElement('tr');

            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.name}</td>
                <td><a href="mailto:${user.email}">${user.email}</a></td>
                <td>${user.company.name}${user.company.catchPhrase}</td>
                <td>${user.phone}</td>
            `;

            tableBody.appendChild(row);//END
            if(user.id == 2){
                const row = tableBody.insertRow();
                row.insertCell().textContent = user.id;
                row.insertCell().textContent = user.username;
                row.insertCell().textContent = user.name;
                row.insertCell().textContent = user.email;
                row.insertCell().textContent = user.company.name;
                row.insertCell().textContent = user.phone;
            }
        });

    })

    .catch(error => console.error('Error fetching data:', error));
    
})*/
let data = [];
async function fetchData(){
    const response = await fetch('data.json');
    data = await response.json();
}
//.catch(error => console.error('Error fetching data:', error));

function buildTable() {
    let tableBody = document.getElementById("json-table").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Clear existing rows
    data.forEach(user => {
        let row = tableBody.insertRow();
        row.insertCell().textContent = user.id;
        row.insertCell().textContent = user.username;
        row.insertCell().textContent = user.name;
        row.insertCell().textContent = user.email;
        row.insertCell().textContent = user.company.name;
        row.insertCell().textContent = user.phone;
    });
}

function filterTable() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        // Skip the header row
        if (tr[i].parentNode.tagName === 'TBODY') {
            let rowMatches = false;
            td = tr[i].getElementsByTagName("td");
            for (let j = 0; j < td.length; j++) {
                if (td[j]) {
                    txtValue = td[j].textContent || td[j].innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        rowMatches = true;
                        break;
                    }
                }
            }
            if (rowMatches) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}



// Call buildTable when the page loads
fetchData();
window.onload = buildTable;