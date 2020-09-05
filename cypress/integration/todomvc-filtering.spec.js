/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";

describe('filtering', () => {
    const todoPage = new TodoPage(); // use let in case you want to change the value

    beforeEach(()=>{
        // actions
        todoPage.navigate();

        todoPage.addOneTodo("Clean room{enter}");
        todoPage.addOneTodo("Learn JavaScript{enter}");
        todoPage.addOneTodo("Use Cypress{enter}");

        todoPage.markAsCompleted(2); // mark the 2nd Todo
    })

    it('should filter "Active" todos', () => {
        // actions
        todoPage.clickOnLabel("Active");

        // assertions
        todoPage.validateListLength(2);
    })

    it('should filter "Completed" todos', () => {
        // actions
        todoPage.clickOnLabel("Completed");

        // assertions
        todoPage.validateListLength(1);
    })

    it('should filter "All" todos', () => {
        // actions
        todoPage.clickOnLabel("All");

        // assertions
        todoPage.validateListLength(3);
    })
})