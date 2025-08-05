// Modern UI Controller for ToDo Easy
class UIController {
    constructor() {
        this.setupEventListeners();
        const logic = new Logic();
    }

    setupEventListeners() {
        $("#input-choose-task").on('keyup', function(e) {
            if (e.key === 'Enter' || e.keyCode === 13) {
                logic.insertNewTask();
            }
        });
    }
}

export { UIController };