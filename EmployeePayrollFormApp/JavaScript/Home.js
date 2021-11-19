window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for(const employeePayrollData of empPayrollList){
        innerHtml = `${innerHtml}
            <tr>
                <td><img class="profile" alt="" src="${employeePayrollData._profilePic}" alt= ""></td>
                <td>${employeePayrollData._name}</td>
                <td>${employeePayrollData._gender}</td>
                <td>${getDeptHtml(employeePayrollData._department)}</td>
                <td>${employeePayrollData._salary}</td>
                <td>${employeePayrollData._startDate}</td>
                <td>
                    <img id="${employeePayrollData._id}" onclick="remove(this)" alt="delete" src="../Assets/Images/delete-black-18dp.svg">
                    <img id="${employeePayrollData._id}" onclick="update(this)" alt="edit" src="../Assets/Images/create-black-18dp.svg">
                </td>
            </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList){
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}



const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Shekharappa Hosur',
            _gender: 'Male',
            _department: [
                'HR',
                'Engineering'
            ],
            
            _salary: '500000',
            _startDate: '29 Oct 2019',
            _note: " ",
            _id: new Date().getTime(),
            _profilePic: '../Assets/profile_Images/Ellipse -3.png'
        },
        {
            _name: 'Amarpa Shankar Keerti Kumar',
            _gender: 'Female',
            _department: [
                'Sales'
            ],
            
            _salary: '400000',
            _startDate: '29 Oct 2019',
            _note: " ",
            _id: new Date().getTime(),
            _profilePic: '../Assets/profile_Images/Ellipse -1.png'
        },
    ];
    return empPayrollListLocal;
}