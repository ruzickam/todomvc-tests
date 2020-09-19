// an example of a Page object, which is, however, not necessary here
// alternative solution: App Actions

export class TodoPage {
    constructor ( url, newTodo, todoList, toggle ){
        this._url = url;
        this._newTodo = newTodo;
        this._todoList = todoList;
        this._toggle = toggle;
    }

    // ACTIONS ***************************************************************
    navigate(){
        cy.visit( this._url );
    }

    addOneTodo( todoText ){
        cy.get( this._newTodo ).type( todoText + "{enter}" );
    }

    addMultipleTodos( num, todoText ){
        for( let i=0; i<num; i++ ){
            cy.get( this._newTodo ).type( `${todoText} ${i + 1} {enter}` );
        }
    }

    markAsCompleted( todoIndex ){ // numbering from 0
        cy.get( `${this._todoList} li:nth-child(${todoIndex + 1}) ${this._toggle}` ).click();
    }

    clickOnLabel( labelContains ){
        cy.contains( labelContains ).click();
    }
    // ************************************************************************



    // VALIDATIONS ************************************************************

    validateTodoText( todoIndex, expectedText ){
        cy.get( `${this._todoList} li:nth-child(${todoIndex + 1})` ).should( 'have.text', expectedText );
    }

    validateNotCheckedBox( todoIndex ){
        cy.get( `${this._todoList} li:nth-child(${todoIndex + 1}) ${this._toggle}` ).should( 'not.be.checked' );
    }

    validateCSSLabelCompleted( todoIndex ){
        cy.get( `${this._todoList} li:nth-child(${todoIndex + 1}) label` ).should( 'have.css', 'text-decoration-line', 'line-through' );
    }

    validateEmptyList(){
        cy.get( this._todoList ).should( 'not.have.descendants', 'li' );
    }

    validateListLength( lengthToValidate ){
        cy.get( `${this._todoList} li` ).should( 'have.length', lengthToValidate )
    }

    validateRandomTodo( listLenght, expectedText ){
        // check the listLength - values 0 OR 1 are not acceptable
        if ( listLenght < 2 ) {
            return;
        }

        // generate random number to probe the list
        do {
            var randomNumber = Math.floor( Math.random() * listLenght );
        } while ( randomNumber == 0 ); // the 1st todo should not be checked
        
        cy.get( `${this._todoList} li:nth-child(${randomNumber + 1})` ).should( 'have.text', `${expectedText} ${listLenght - randomNumber - 1}` );
    }
    // ************************************************************************
}