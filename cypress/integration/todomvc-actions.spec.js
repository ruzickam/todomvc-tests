/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";

describe( 'todo actions', () => {
    const todoPage = new TodoPage(
        'http://todomvc-app-for-testing.surge.sh/',
        '.new-todo',
        '.todo-list',
        '.toggle' );

    beforeEach( ()=>{
        // actions
        todoPage.navigate();
        todoPage.addOneTodo( 'Clean room' );

    });

    it( 'should check the added todo', () => {  
        // actions

        // assertions
        todoPage.validateTodoText( 0, 'Clean room' );
        todoPage.validateNotCheckedBox( 0 );
    
    });
    
    it( 'should mark the added todo as completed', () => {
        // actions
        todoPage.markAsCompleted( 0 );

        // assertions
        todoPage.validateCSSLabelCompleted( 0 );
        
    });
    
    it( 'should clear the added todo', () => {
        // actions
        todoPage.markAsCompleted(0);
        todoPage.clickOnLabel( 'Clear' );
    
        // assertions
        todoPage.validateEmptyList();
        
    });

    it( 'should add 100 more todos and check it', () => {
        let num = 100; // how many todos should be added
        let text = 'heh';

        // actions
        todoPage.addMultipleTodos( num, text );
    
        // assertions
        todoPage.validateListLength( num + 1 );
        todoPage.validateRandomTodo( num + 1, text );
        
    });

});
