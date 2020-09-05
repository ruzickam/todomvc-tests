/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";

describe('todo actions', () => {
    const todoPage = new TodoPage(); // use let in case you want to change the value

    beforeEach(()=>{
        // actions
        todoPage.navigate();
        todoPage.addOneTodo("Clean room{enter}");

    })

    it('should check the added todo', () => {  
        // actions

        // assertions
        todoPage.validateTodoText(0, 'Clean room');
        todoPage.validateNotCheckedBox(0);
    
    })
    
    it('should mark the added todo as completed', () => {
        // actions
        todoPage.markAsCompleted(0);

        // assertions
        todoPage.validateCSSLabelCompleted(0);
        
    })
    
    it('should clear the added todo', () => {
        // actions
        todoPage.markAsCompleted(0);
        todoPage.clickOnLabel("Clear");
    
        // assertions
        todoPage.validateEmptyList();
        
    })

    it('should add 100 more todos and check it', () => {
        // actions

    
        // assertions

        
    })


})
