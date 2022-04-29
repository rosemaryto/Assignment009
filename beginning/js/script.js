// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [11111111,"Jane Do",1111,"jdo@gmail.com","Executive"],
    [22222222,"John Do",2222,"johndo@gmail.com","Administrative"],
    [33333333,"Robert Don",3333,"rdon@gmail.com","Quality Assurance"],
    [44444444,"Doug Sally",4444,"dsally@gmail.com","Marketing"],
    [55555555,"Grace Kelly",5555,"gkelly@gmail.com","Sales"]
]
let storage
// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (employees.length === 0) {
    storage = localStorage.getItem('employees')

    if (storage.length > 0) {
        employees = storage
    }
}

// GET DOM ELEMENTS
let form = document.getElementById('addForm')
let empTable = document.getElementById('employees')
let delTbody = document.querySelector('tbody')
let empCount = document.querySelector('#empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let empId = document.getElementById('id').value
    let empName = document.getElementById('name').value
    let empExt = document.getElementById('extension').value
    let empEmail = document.getElementById('email').value
    let empDept = document.getElementById('department').value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmp = []
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmp)
    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        empTable.deleteRow(e.target.parentNode.parentNode.rowIndex)
        // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE

        // REMOVE EMPLOYEE FROM ARRAY
        
        // BUILD THE GRID
        buildGrid()
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid(employees) {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    delTbody = document.removeChild(delTbody)
    // REBUILD THE TBODY FROM SCRATCH
    tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee of employees) {
        `<tr>
        <td>${employee[empId]}</td>
        <td>${employee[empName]}</td>
        <td>${employee[empExt]}</td>
        <td>${employee[empEmail]}</td>
        <td>${employee[empDept]}</td>
        </tr>`
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    document.tbody.append(empTable)
    // UPDATE EMPLOYEE COUNT
    
    let count = 0
    count++
    empCount.innerHTML = `(${count})`
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees)) 

};