let EmployeeDetails = [{
    EmployId: 1,
    EmpName: "Vinay",
    EmplComp: "Google",
    EmpSalary: 5400,
    EmpAdd: {
        EmpCity: "Mumbai",
        EmpArea: "Vandra",
    }
},
{
    EmployId: 2,
    EmpName: "Sandhya",
    EmplComp: "Google",
    EmpSalary: 5500,
    EmpAdd: {
        EmpCity: "SangaReddy",
        EmpArea: "Balaji Nagar",
    }
},
{
    EmployId: 3,
    EmpName: "Vishal",
    EmplComp: "Microsoft",
    EmpSalary: 6400,
    EmpAdd: {
        EmpCity: "Hyderabad",
        EmpArea: "KPHB",
    }
}
]

EmployeeDetails.map(user => {
    let store = document.getElementById("store");
    store.innerHTML += `<tr>
        <td>${user.EmployId}</td>
        <td>${user.EmpName}</td>
        <td>${user.EmplComp}</td>
        <td>${user.EmpSalary}</td>
        <td>${user.EmpAdd.EmpCity}</td>
        <td>${user.EmpAdd.EmpArea}</td>
    </tr>`;
});
