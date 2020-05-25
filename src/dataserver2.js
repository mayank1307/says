import React, { Component } from "react";
import {
    Stitch,
    RemoteMongoClient,
    UserPasswordCredential
  } from 'stitch';
      
      const stitchClient = Stitch.initializeDefaultAppClient("syldata-uexzd");
      
      login("joe.schmoe@company.com", "SuperSecretPassword123").then(() => {
        // Initialize a MongoDB Service Client
        const mongodb = stitchClient.getServiceClient(
          RemoteMongoClient.factory,
          "mongodb-atlas"
        );
        // Get a hook to the direct_reports collection
        const employees = mongodb.db("syllabus").collection("syl");
        
        return employees.find({}, {
          // limit: 3,
          // sort: { "salary": -1 }
        })
          .asArray();
      })
        .then(displayEmployees)
      
      function login(email, password) {
        const credential = new UserPasswordCredential(email, password);
        return stitchClient.auth.loginWithCredential(credential);
      }
      
      
      // Renders the the employees' information in the table
      function displayEmployees(employees) {
        const employeesTableBody = document.getElementById("employees");
        const numResultsEl = document.getElementById("num-results");
        const tableRows = employees.map(employee => {
          return `
            <tr>
              <td>${employee.name.last}, ${employee.name.first}</td>
              <td>${employee.email}</td>
              <td>${employee.role}</td>
              <td>${employee.manager.name.first} ${employee.manager.name.last} (${employee.manager.id || "no manager"})</td>
              <td>${employee.salary}</td>
            </tr>
          `;
        });
        employeesTableBody.innerHTML = tableRows.join("");
        numResultsEl.innerHTML = employees.length;
}

export default displayEmployees;