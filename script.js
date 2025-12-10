// Fetch data from a mock API 

fetch('https://jsonplaceholder.typicode.com/users')

.then(response => response.json())

.then(data => {

    const tableBody = document.getElementById('data-table');

    data.forEach(user => {

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.name}</td>
            <td><a href="mailto:${user.email}">${user.email}</a></td>
            <td>${user.company.name}${user.company.catchPhrase}</td>
            <td>${user.phone}</td>
        `;

        tableBody.appendChild(row);

    });

})

.catch(error => console.error('Error fetching data:', error));
