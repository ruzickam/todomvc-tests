// an example of a Page object, which is, however, not necessary here
// alternative solution: App Actions

export class TodoPage {

    // ACTIONS ***************************************************************
    navigate(){
        cy.visit('http://todomvc-app-for-testing.surge.sh/');
    }

    addOneTodo(todoText){
        cy.get('.new-todo').type(todoText + "{enter}");
    }

    addMultipleTodos(num, todoText){
        for(let i=0; i<num; i++){
            cy.get('.new-todo').type(todoText + "{enter}");
        }
        
    }

    markAsCompleted(todoIndex){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click();
    }

    clickOnLabel(labelContains){
        cy.contains(labelContains).click();
    }
    // ************************************************************************



    // VALIDATIONS ************************************************************

    validateTodoText(todoIndex, expectedText){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1})`).should('have.text', expectedText);
    }

    validateNotCheckedBox(todoIndex){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).should('not.be.checked');
    }

    validateCSSLabelCompleted(todoIndex){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.css', 'text-decoration-line', 'line-through');
    }

    validateEmptyList(){
        cy.get('.todo-list').should('not.have.descendants', 'li');
    }

    validateListLength(lengthToValidate){
        cy.get('.todo-list li').should('have.length', lengthToValidate)
    }
    // ************************************************************************
}