$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/testcase.feature");
formatter.feature({
  "line": 1,
  "name": "taskmanager",
  "description": "",
  "id": "taskmanager",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login to the TaskManager website",
  "description": "",
  "id": "taskmanager;login-to-the-taskmanager-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@tc01_login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "open TaskManager website",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter Login and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "login_step.launch_the_browser()"
});
formatter.result({
  "duration": 12110750400,
  "status": "passed"
});
formatter.match({
  "location": "login_step.open_TaskManager_website()"
});
formatter.result({
  "duration": 3873893800,
  "status": "passed"
});
formatter.match({
  "location": "login_step.enter_Login_and_Password()"
});
formatter.result({
  "duration": 281273900,
  "status": "passed"
});
formatter.match({
  "location": "login_step.click_on_Login_button()"
});
formatter.result({
  "duration": 949746500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Add new employee in TaskManager website",
  "description": "",
  "id": "taskmanager;add-new-employee-in-taskmanager-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@tc02_employees"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Launch the website in a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "click on employee",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click on add new employee",
  "keyword": "Then "
});
formatter.match({
  "location": "employees_step.launch_the_website_in_a_browser()"
});
formatter.result({
  "duration": 12842451400,
  "status": "passed"
});
formatter.match({
  "location": "employees_step.click_on_employee()"
});
formatter.result({
  "duration": 582571900,
  "status": "passed"
});
formatter.match({
  "location": "employees_step.click_on_add_new_employee()"
});
formatter.result({
  "duration": 901194100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Add employee details in TaskManager website",
  "description": "",
  "id": "taskmanager;add-employee-details-in-taskmanager-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@tc03_list"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "click on Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "click on add new Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "enter details of employee",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "click on Add button",
  "keyword": "And "
});
formatter.match({
  "location": "list_step.open_the_browser()"
});
formatter.result({
  "duration": 12665397200,
  "status": "passed"
});
formatter.match({
  "location": "list_step.click_on_Employee()"
});
formatter.result({
  "duration": 722737100,
  "status": "passed"
});
formatter.match({
  "location": "list_step.click_on_add_new_Employee()"
});
formatter.result({
  "duration": 883769900,
  "status": "passed"
});
formatter.match({
  "location": "list_step.enter_details_of_employee()"
});
formatter.result({
  "duration": 947004000,
  "status": "passed"
});
formatter.match({
  "location": "list_step.click_on_Add_button()"
});
formatter.result({
  "duration": 1033505900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Print task in the TaskManager website",
  "description": "",
  "id": "taskmanager;print-task-in-the-taskmanager-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@tc04_print"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Click on Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click on add new Employee",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Enter details of employee",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "click on Add Button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "print the tasks",
  "keyword": "And "
});
formatter.match({
  "location": "print_step.open_the_browser()"
});
formatter.result({
  "duration": 12617346700,
  "status": "passed"
});
formatter.match({
  "location": "print_step.click_on_Employee()"
});
formatter.result({
  "duration": 735799700,
  "status": "passed"
});
formatter.match({
  "location": "print_step.click_on_add_new_Employee()"
});
formatter.result({
  "duration": 931112800,
  "status": "passed"
});
formatter.match({
  "location": "print_step.enter_details_of_employee()"
});
formatter.result({
  "duration": 763488000,
  "status": "passed"
});
formatter.match({
  "location": "print_step.click_on_Add_Button()"
});
formatter.result({
  "duration": 1726725400,
  "status": "passed"
});
formatter.match({
  "location": "print_step.print_the_tasks()"
});
formatter.result({
  "duration": 818237100,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Logout from TaskManager website",
  "description": "",
  "id": "taskmanager;logout-from-taskmanager-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@tc05_logout"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Open the Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "click on administration",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "click on logout",
  "keyword": "And "
});
formatter.match({
  "location": "logout_step.open_the_Browser()"
});
formatter.result({
  "duration": 12536948400,
  "status": "passed"
});
formatter.match({
  "location": "logout_step.click_on_administration()"
});
formatter.result({
  "duration": 559596800,
  "status": "passed"
});
formatter.match({
  "location": "logout_step.click_on_logout()"
});
formatter.result({
  "duration": 865435800,
  "status": "passed"
});
});