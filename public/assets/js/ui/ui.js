// Modern UI Controller for ToDo Easy
import { Logic } from '../logic/logic.js';

class UIController {
    constructor() {
        this.logic = new Logic();
        this.setupEventListeners();
    }

    setupEventListeners() {
        const input = document.getElementById('input-choose-task');
        
        input.addEventListener('keyup', (e) => {
            if (e.key === 'Enter' || e.keyCode === 13) {
                console.log('Enter key detected, calling insertNewTask');
                this.logic.insertNewTask();
            }
        });
    }
}

export { UIController };