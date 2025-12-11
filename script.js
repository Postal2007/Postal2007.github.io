// Fetch data from a mock API 

document.addEventListener('DOMContentLoaded', () => {
    //JSON
    fetch('data.json')

    .then(response => response.json())

    .then(data => {

        //const tableBody = document.getElementById('json-table');
        const JsonTableBody = document.querySelector('#json-table tbody')

        data.forEach(project => {
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
            if(project.Status == "Planned"){
                const row = JsonTableBody.insertRow();
                row.insertCell().textContent = project.ProjectID;
                row.insertCell().textContent = project.ProjectName;
                row.insertCell().textContent = project.Province;
                row.insertCell().textContent = project.City;
                row.insertCell().textContent = project.Address;
                row.insertCell().textContent = project.Budget;
                row.insertCell().textContent = project.Contractor.Name;
                row.insertCell().textContent = project.Status;
            }
        });

    })

    .catch(error => console.error('Error fetching data:', error));
    //XML
    fetch('data.xml')
        .then(response => response.text())
        .then(xmlText => {
            const parser = new DOMParser()
            const xmlDoc = parser.parseFromString(xmlText, "text/xml")
            populateTable(xmlDoc)
        }) 
    
})

function populateTable(xmlDoc){
    const xmlTableBody = document.querySelector('#xml-table tbody')

    let htmlContent = `
        <tr>
            <th>Project ID</th>
            <th>Project Name</th>
            <th>Province</th>
            <th>City</th>
            <th>Address</th>
            <th>Budget</th>
            <th>Contractor Name</th>
            <th>Status</th>
        </tr>
    `;

    const projects = xmlDoc.getElementsByTagName("project");

    for (let i = 0; i < projects.length; i++){
        const project = projects[i];

        const ProjectID = project.getElementsByTagName("projectID")[0].textContent;
        const ProjectName = project.getElementsByTagName("projectName")[0].textContent;
        const Province = project.getElementsByTagName("province")[0].textContent;
        const City = project.getElementsByTagName("city")[0].textContent;
        const Address = project.getElementsByTagName("address")[0].textContent;
        const Budget = project.getElementsByTagName("maxBudget")[0].textContent;
        const ContractorName = project.getElementsByTagName("contractorName")[0].textContent;
        const Status = project.getElementsByTagName("status")[0].textContent;

        htmlContent += `
            <tr>
                <td>${ProjectID}</td>
                <td>${ProjectName}</td>
                <td>${Province}</td>
                <td>${City}</td>
                <td>${Address}</td>
                <td>${Budget}</td>
                <td>${ContractorName}</td>
                <td>${Status}</td>
            </tr>
        `;
    }

    xmlTableBody.innerHTML = htmlContent;
}