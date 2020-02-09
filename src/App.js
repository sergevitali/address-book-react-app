import React, {Component} from 'react';
import styles from './App.module.css';
import Employee from './Components/Employee/Employee';
import Form from './Components/Form/Form';
import Menu from './Components/Menu/Menu';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      employees: [
        { firstName: 'Jane', lastName: 'Doe', department: 'Marketing', phoneNumber: '0256589705' },
        { firstName: 'Nick', lastName: 'Mullins', department: 'Finance', phoneNumber: '4356855772' },
        { firstName: 'Sam', lastName: 'Jackson', department: 'Sales', phoneNumber: '0212145544' }
      ],
      newEmployee: {
        firstName: {
          elementConfig: {
            type: 'text',
            placeholder: 'Enter First Name'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        lastName: {
          elementConfig: {
            type: 'text',
            placeholder: 'Enter Last Name'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        department: {
          elementConfig: {
            type: 'text',
            placeholder: 'Enter Department'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        phoneNumber: {
          elementConfig: {
            type: 'number',
            placeholder: 'Enter Number'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        }
      },
      submitted: false,
      formIsValid: false,
      employeesSorted: false,
      displayForm: false,
      searchedInput: '',
      filteredElements: [],
      searched: false
    };
  }

  //Sort by surname function
  sortListHandler = () => {
    let newEmployees
    const sortedEmployees = !this.state.employeesSorted
    if (this.state.searched) {
      newEmployees = [...this.state.filteredElements];
      this.compareList(newEmployees);
      this.setState({
        filteredElements: newEmployees,
        employeesSorted: sortedEmployees
      });
    } else {
      newEmployees = [...this.state.employees]
      this.compareList(newEmployees)
      this.setState({
        employees: newEmployees,
        employeesSorted: sortedEmployees
      })
    }
  }
  
  
  //Function to add a new employee and to clear the form input fields
  addEmployeeHandler = (event) => {
    event.preventDefault()
    const newEmployee = {}
    for (const inputIdentifier in this.state.newEmployee) { // inputIdentifier:firstName, lastName...)
      newEmployee[inputIdentifier] = this.state.newEmployee[inputIdentifier].value
    }
    let submitted = this.state.submitted
    submitted = true
    this.setState({
      employees: [...this.state.employees, newEmployee],
      submitted: submitted
    })
    setTimeout(() => this.clearInputFields())
  }
  

  //Function to clear form input fields when discarded
  clearInputFields = () => {
    const newEmployee = { ...this.state.newEmployee }
    for (const inputId in newEmployee) {
      newEmployee[inputId].value = ''
      newEmployee[inputId].valid = false
      newEmployee[inputId].touched = false
    }
    this.setState({
      newEmployee: newEmployee,
      formIsValid: false
    })
  }
  

  //Event handler to capture input field data
  inputChangedHandler = (event, inputIdentifier) => {
    const newEmployeeInput = {
      ...this.state.newEmployee
    }
    const updatedInput = {
      ...newEmployeeInput[inputIdentifier]
    }
    updatedInput.value = event.target.value
    updatedInput.valid = this.checkValidity(updatedInput.value, updatedInput.validation)
    updatedInput.touched = true
    newEmployeeInput[inputIdentifier] = updatedInput
    let formIsValid = true
    for (const inputIdentifier in newEmployeeInput) {
      formIsValid = newEmployeeInput[inputIdentifier].valid && formIsValid
    }
    this.setState({
      newEmployee: newEmployeeInput,
      formIsValid: formIsValid
    })
  }

  //Function to delete an employee contact
  deleteEmployeeHandler = (index) => {
    const filteredElements = [...this.state.filteredElements]
    filteredElements.splice(index, 1)
    const employees = [...this.state.employees]
    employees.splice(index, 1)
    this.setState({
      employees: employees,
      filteredElements: filteredElements
    })
  }  

  //Function to check required fields' validity
  checkValidity = (value, rules) => {
    let isValid = false
    if (rules.required) {
      isValid = value.trim() !== ''
    }
    return isValid
  }
  

  //Function to display and hide the modal form
  openFormHandler = () => {
    const doesDisplayForm = this.state.displayForm
    this.setState({
      displayForm: !doesDisplayForm,
      searched: false
    })
    setTimeout(() => this.clearInputFields())
  }

  //Search input field event handler
  inputReceiveHandler = (event) => {
    let searchedValue = this.state.searchedInput
    searchedValue = event.target.value
    this.setState({
      searchedInput: searchedValue
    })
  }

  //Logic to search by surname or department
  searchHandler = (event) => {
    event.preventDefault()
    const searchedValue = this.state.searchedInput.toLowerCase()
    const employees = [...this.state.employees]
    const filteredEmployees = []
    employees.map(employee => {
      const lowerCaseDepartment = employee.department.toLowerCase()
      const lowerCaseLastName = employee.lastName.toLowerCase()
      if (lowerCaseDepartment.includes(searchedValue) || lowerCaseLastName.includes(searchedValue)) {
        return filteredEmployees.push(employee)
      }
    })
    this.setState({
      filteredElements: filteredEmployees,
      searched: true
    })
  }

  //Logic to compare surnames to sort
  compareList = (arr) => {
    let sortCheck = 1
    if (!this.state.employeesSorted) {
      sortCheck = -1
    }
    arr.sort((a, b) => {
      var nameA = a.lastName.toUpperCase()
      var nameB = b.lastName.toUpperCase()
      if (nameA < nameB) {
        return sortCheck
      }
      if (nameA > nameB) {
        return sortCheck * -1
      }
      return 0
    })
  }

  render(){
    const formElementsArray = [];
    for (let key in this.state.newEmployee) {
      formElementsArray.push({
        id:key,
        config:this.state.newEmployee[key] //elementConfig and value
      })
    }
    let employees = [];
    this.state.searched || this.state.filteredElements > 0 ?
      employees = this.state.filteredElements:
      employees = this.state.employees
    return (
      <div className = { styles.App } >
        <h1>Employee Address Book</h1> {
        this.state.displayForm ?
        <Form handleSubmit={(event) => this.addEmployeeHandler(event)}
              changed={this.inputChangedHandler}
              closeForm={() => this.openFormHandler()}
              formElements={formElementsArray}
              key={FormData.id}
              disabled={!this.state.formIsValid}
              />:null
        }
        <Menu openForm={() => this.openFormHandler()}
              sortList={this.sortListHandler}
              searched={(event) => this.searchHandler(event)}
              inputted={(event) => this.inputReceiveHandler(event)}
        />
        <div className={styles.Border} id='border-div'>
          {
          employees.map((employee, index) => (
            <Employee
              key={index + employee.firstName}
              firstName={employee.firstName}
              lastName={employee.lastName}
              delete={() => this.deleteEmployeeHandler(index)}
              department={employee.department}
              phoneNumber={employee.phoneNumber}
            />
          ))
          }
        </div>
      </div>
    );
  }
}

export default App;
