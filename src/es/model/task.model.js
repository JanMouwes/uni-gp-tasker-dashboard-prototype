export default class Task {
    /**
     *
     * @param {string} description
     * @param {number} duration in hours
     * @param {bool} isCompleted
     */
    constructor(description, duration, isCompleted) {
        this.description = description;
        this.duration = duration;
        this.isCompleted = isCompleted;
    }
}