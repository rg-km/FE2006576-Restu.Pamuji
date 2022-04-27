module.exports = class TextEditor {
    constructor() {
        // TODO: answer here
        this.data = []
        this.undoStack = []
        this.redoStack = []
        this.size = 10
        this.top = -1
    }

    write(c) {
        // TODO: answer here
        //writing character from parameter
        this.data.push(c)
        this.top++

         //if the undo stack is full, remove the first element
         if (this.undoStack.length === this.size) {
            this.undoStack.shift()
        }
        //push the character to the undo stack
        this.undoStack.push(c)

    }

    read() {
        // TODO: answer here
        //Read on text editor with inserted characters
        let output = ""
        for (let i = 0; i < this.data.length; i++) {
            output += this.data[i]
        }
        //when read on text editor with no inserted characters
        if (output === "") {
            output = ""
        }
        else {
            output = output
        }
        return output
    }

    undo() {
        // TODO: answer here
        //adding undo state on undoStack array
        if (this.undoStack.length === 0) {
            return
        }
        //removing the last element from the undoStack array
        let lastElement = this.undoStack.pop()
        //adding the last element to the redoStack array
        this.redoStack.push(lastElement)
        //removing the last element from the data array
        this.data.pop()
        //decreasing the top value
        this.top--


    }
    
    redo() {
        // TODO: answer here
        //adding redo state on redoStack array
        if (this.redoStack.length === 0) {
            return
        }
        //removing the last element from the redoStack array
        let lastElement = this.redoStack.pop()
        //adding the last element to the undoStack array
        this.undoStack.push(lastElement)
        //adding the last element to the data array
        this.data.push(lastElement)
        //increasing the top value
        this.top++
        
    }
}