// Fetch data from a mock API 
document.addEventListener('DOMContentLoaded', () => {
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

            tableBody.appendChild(row);*/
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
})