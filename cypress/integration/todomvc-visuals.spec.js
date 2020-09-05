/// <reference types="cypress" />

// TO RUN THIS YOU MUST SET UP ENV VAR:
// $Env:APPLITOLS_API_KEY="PUT_YOUR_KEY_HERE"

import { TodoPage } from "../page-objects/todo-page";
import { Eyes } from "../page-objects/eyes";

describe('visual validation', () => {
    const todoPage = new TodoPage(); // use let in case you want to change the value
    const eyes = new Eyes();

    before( () => todoPage.navigate() );
    // to trigger a visual bug: 1) comment the line above; 2) before( () => cy.visit("http://todomvc-app-for-testing.surge.sh/?different-title-color") );
    
    beforeEach( () => eyes.open() );
    afterEach( () => eyes.close() );

    it('should look great', () => {
        // assertions - visual validation
        eyes.checkWindow('empty todo list');

        // actions
        todoPage.addOneTodo('Clean room');
        todoPage.addOneTodo('Learn JavaScript');

        // assertions - visual validation
        eyes.checkWindow('two todos');

        // actions
        todoPage.markAsCompleted(0);

        // assertions - visual validation
        eyes.checkWindow('mark as completed');
    })
})