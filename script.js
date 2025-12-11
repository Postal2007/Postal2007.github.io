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
    let htmlContent = "<tr><th>Project ID</th><th>Project Name</th><th>Province</th><th>City</th><th>Address</th><th>Budget</th><th>Contractor Name</th><th>Status</th></tr>";
    const projectsFile = xmlDoc.getElementsByTagName("projects");
    const projects = projectsFile[0].getElementsByTagName("project")
    for (let i = 0; i < projects.length; i++){
        const row = document.createElement("tr");
        project = projects[i]
        
        //if(Status == "In-Progress"){
        const ProjectIdCell = document.createElement("td");
            ProjectIdCell.textContent = project.getElementsByTagName("projectID")[0].childNodes[0].nodeValue;
            row.appendChild(ProjectIdCell);
        const ProjectNameCell = document.createElement("td");
            ProjectNameCell.textContent = project.getElementsByTagName("projectName")[0].childNodes[0].nodeValue;
            row.appendChild(ProjectNameCell);
        const ProvinceCell = document.createElement("td");
            ProvinceCell.textContent = project.getElementsByTagName("province")[0].childNodes[0].nodeValue;
            row.appendChild(ProvinceCell);
        const CityCell = document.createElement("td");
            CityCell.textContent = project.getElementsByTagName("city")[0].childNodes[0].nodeValue;
            row.appendChild(CityCell);
        const AddressCell = document.createElement("td");
            AddressCell.textContent = project.getElementsByTagName("address")[0].childNodes[0].nodeValue;
            row.appendChild(AddressCell);
        const BudgetCell = document.createElement("td");
            BudgetCell.textContent = project.getElementsByTagName("maxBudget")[0].childNodes[0].nodeValue;
            row.appendChild(BudgetCell);
        const ContractorNameCell = document.createElement("td");
            ContractorNameCell.textContent = project.getElementsByTagName("contractorName")[0].childNodes[0].nodeValue;
            row.appendChild(ContractorNameCell);
        const StatusCell = document.createElement("td");
            StatusCell.textContent = project.getElementsByTagName("status")[0].childNodes[0].nodeValue;
            row.appendChild(StatusCell);
            
            xmlTableBody.appendChild(row);
            //htmlContent += '<tr><td>${ProjectID}</td><td>${ProjectName}</td><td>${Province}</td><td>${City}</td><td>${Address}</td><td>${Budget}</td><td>${ContractorName}</td></tr>';
        //}
    }
    // Insert the generated HTML string into the table element
    xmlTableBody.innerHTML = htmlContent;
}