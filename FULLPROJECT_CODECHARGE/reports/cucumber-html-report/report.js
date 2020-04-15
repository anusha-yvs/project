$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/testcase.feature");
formatter.feature({
  "line": 3,
  "name": "taskmanager website",
  "description": "",
  "id": "taskmanager-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@taskmanager"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login to the TaskManager with valid data and invalid data",
  "description": "",
  "id": "taskmanager-website;login-to-the-taskmanager-with-valid-data-and-invalid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tc_01_login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Open the  taskmanager website  Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter the \"\u003cusername1\u003e\" and \"\u003cpassword1\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on Login button1",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "taskmanager-website;login-to-the-taskmanager-with-valid-data-and-invalid-data;",
  "rows": [
    {
      "cells": [
        "username1",
        "password1"
      ],
      "line": 13,
      "id": "taskmanager-website;login-to-the-taskmanager-with-valid-data-and-invalid-data;;1"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 14,
      "id": "taskmanager-website;login-to-the-taskmanager-with-valid-data-and-invalid-data;;2"
    },
    {
      "cells": [
        "admin1",
        "admiin2"
      ],
      "line": 15,
      "id": "taskmanager-website;login-to-the-taskmanager-with-valid-data-and-invalid-data;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Login to the TaskManager with valid data and invalid data",
  "description": "",
  "id": "taskmanager-website;login-to-the-taskmanager-with-valid-data-and-invalid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tc_01_login"
    },
    {
      "line": 1,
      "name": "@taskmanager"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Open the  taskmanager website  Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter the \"admin\" and \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on Login button1",
  "keyword": "And "
});
formatter.match({
  "location": "taskmanagerloginstep.launch_the_browser()"
});
formatter.result({
  "duration": 14789099700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 11
    },
    {
      "val": "admin",
      "offset": 23
    }
  ],
  "location": "taskmanagerloginstep.enter_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 222163500,
  "status": "passed"
});
formatter.match({
  "location": "taskmanagerloginstep.click_on_Login_button()"
});
formatter.result({
  "duration": 3448585700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login to the TaskManager with valid data and invalid data",
  "description": "",
  "id": "taskmanager-website;login-to-the-taskmanager-with-valid-data-and-invalid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tc_01_login"
    },
    {
      "line": 1,
      "name": "@taskmanager"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Open the  taskmanager website  Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter the \"admin1\" and \"admiin2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on Login button1",
  "keyword": "And "
});
formatter.match({
  "location": "taskmanagerloginstep.launch_the_browser()"
});
formatter.result({
  "duration": 11899229700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin1",
      "offset": 11
    },
    {
      "val": "admiin2",
      "offset": 24
    }
  ],
  "location": "taskmanagerloginstep.enter_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 257738500,
  "status": "passed"
});
formatter.match({
  "location": "taskmanagerloginstep.click_on_Login_button()"
});
formatter.result({
  "duration": 2247361200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "addTask to the Application",
  "description": "",
  "id": "taskmanager-website;addtask-to-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@tc_02_addtaskonly"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "launch the  website in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "click on addTask",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "enter all the details",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "click on Add button",
  "keyword": "And "
});
formatter.match({
  "location": "addtask_step.launch_the_Website_in_the_Browser()"
});
formatter.result({
  "duration": 12209987800,
  "status": "passed"
});
formatter.match({
  "location": "addtask_step.click_on_the_addNewTask()"
});
formatter.result({
  "duration": 1906886600,
  "status": "passed"
});
formatter.match({
  "location": "addtask_step.enter_all_the_details()"
});
formatter.result({
  "duration": 10431501000,
  "status": "passed"
});
formatter.match({
  "location": "addtask_step.click_on_the_Add_button()"
});
formatter.result({
  "duration": 3218220100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "searching the entered Task",
  "description": "",
  "id": "taskmanager-website;searching-the-entered-task",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@tc_03_searchtask"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "open the prequisite browser",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Click On Task List",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "enter the Task details",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "click on search button1",
  "keyword": "And "
});
formatter.match({
  "location": "searchtaskstep.launch_the_Website_in_the_Browser()"
});
formatter.result({
  "duration": 12023031800,
  "status": "passed"
});
formatter.match({
  "location": "searchtaskstep.click_On_Task_List()"
});
formatter.result({
  "duration": 2958615700,
  "status": "passed"
});
formatter.match({
  "location": "searchtaskstep.select_the_task()"
});
formatter.result({
  "duration": 564385600,
  "status": "passed"
});
formatter.match({
  "location": "searchtaskstep.click_on_the_Search_button1()"
});
formatter.result({
  "duration": 2295756000,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Add new employee in TaskManager website",
  "description": "",
  "id": "taskmanager-website;add-new-employee-in-taskmanager-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@tc_04_Addemployee"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "Launch the Website in the Browser1",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I click on administration",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I click on employees",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I click on add new employee",
  "keyword": "Then "
});
formatter.match({
  "location": "addemployee_stepdef.launch_the_Website_in_the_Browser()"
});
formatter.result({
  "duration": 13615346800,
  "status": "passed"
});
formatter.match({
  "location": "addemployee_stepdef.i_click_on_administration()"
});
formatter.result({
  "duration": 631765700,
  "status": "passed"
});
formatter.match({
  "location": "addemployee_stepdef.i_click_on_employees()"
});
formatter.result({
  "duration": 645325500,
  "status": "passed"
});
formatter.match({
  "location": "addemployee_stepdef.i_click_on_add_new_employee()"
});
formatter.result({
  "duration": 1321140900,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Add employee details in TaskManager website",
  "description": "",
  "id": "taskmanager-website;add-employee-details-in-taskmanager-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@tc_05_employeedetails"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "Launch the Website in the Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I enter all the details of employee",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I click on Add button",
  "keyword": "And "
});
formatter.match({
  "location": "employeedetalis_stepdef.launch_the_Website_in_the_Browser()"
});
formatter.result({
  "duration": 13878779100,
  "status": "passed"
});
formatter.match({
  "location": "employeedetalis_stepdef.I_enter_all_the_details_of_employee()"
});
formatter.result({
  "duration": 4387102400,
  "status": "passed"
});
formatter.match({
  "location": "employeedetalis_stepdef.I_click_on_Add_button()"
});
formatter.result({
  "duration": 1900558900,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Add Project to the TaskManager Website",
  "description": "",
  "id": "taskmanager-website;add-project-to-the-taskmanager-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@tc_06_addproject"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "Open the Website in the Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "click on the administration",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "Click on the Projects",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "Click on the Add New Project",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "Enter the Project Name",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Click on the Add Button",
  "keyword": "And "
});
formatter.match({
  "location": "Addprojectstep2.open_the_Website_in_the_Browser()"
});
formatter.result({
  "duration": 12049296400,
  "status": "passed"
});
formatter.match({
  "location": "Addprojectstep2.click_on_the_administration()"
});
formatter.result({
  "duration": 1221720400,
  "status": "passed"
});
formatter.match({
  "location": "Addprojectstep2.click_on_the_Projects()"
});
formatter.result({
  "duration": 1827201600,
  "status": "passed"
});
formatter.match({
  "location": "Addprojectstep2.click_on_the_Add_New_Project()"
});
formatter.result({
  "duration": 814091300,
  "status": "passed"
});
formatter.match({
  "location": "Addprojectstep2.enter_the_Project_Name()"
});
formatter.result({
  "duration": 186468900,
  "status": "passed"
});
formatter.match({
  "location": "Addprojectstep2.click_on_the_Add_Button()"
});
formatter.result({
  "duration": 1736409800,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Search the  New Project",
  "description": "",
  "id": "taskmanager-website;search-the--new-project",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 57,
      "name": "@tc_07_searchnewproject"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "Open the website  Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "Click On Task List1",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "Select the Newly Entered Project",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "searchprojectstep.open_the_website_Browser()"
});
formatter.result({
  "duration": 12236541600,
  "status": "passed"
});
formatter.match({
  "location": "searchprojectstep.click_On_Task_List()"
});
formatter.result({
  "duration": 2805805200,
  "status": "passed"
});
formatter.match({
  "location": "searchprojectstep.select_the_Newly_Entered_Project()"
});
formatter.result({
  "duration": 553288500,
  "status": "passed"
});
formatter.match({
  "location": "searchprojectstep.click_on_the_Search_button()"
});
formatter.result({
  "duration": 1770440800,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Add Task to the  Newly entered Project",
  "description": "",
  "id": "taskmanager-website;add-task-to-the--newly-entered-project",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 65,
      "name": "@tc_8_addtasktonewproject"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "Launch the Website in the Browser2",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "Click on the AddNewTask",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "Enter all the details",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "Click on the Add button1",
  "keyword": "And "
});
formatter.match({
  "location": "add_newtask_step.Launch_the_Website_in_the_Browser()"
});
formatter.result({
  "duration": 11794524000,
  "status": "passed"
});
formatter.match({
  "location": "add_newtask_step.click_on_the_AddNewTask()"
});
formatter.result({
  "duration": 2065669000,
  "status": "passed"
});
formatter.match({
  "location": "add_newtask_step.Enter_all_the_details()"
});
formatter.result({
  "duration": 10648331300,
  "status": "passed"
});
formatter.match({
  "location": "add_newtask_step.click_on_the_Add_button()"
});
formatter.result({
  "duration": 2412868100,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "logout the page",
  "description": "",
  "id": "taskmanager-website;logout-the-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 73,
      "name": "@tc_9_logout"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "Launch the Website Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "click administration",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "click the logout",
  "keyword": "And "
});
formatter.match({
  "location": "logoutstep.Launch_the_Website_Browser()"
});
formatter.result({
  "duration": 13949209700,
  "status": "passed"
});
formatter.match({
  "location": "logoutstep.click_administration()"
});
formatter.result({
  "duration": 662540500,
  "status": "passed"
});
formatter.match({
  "location": "logoutstep.click_the_logout()"
});
formatter.result({
  "duration": 1850015700,
  "status": "passed"
});
});