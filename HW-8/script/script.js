class Student {
    #marks
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.#marks = [5, 4, 4, 5];
        this.dismiss = false;
    }

    getAverageMark() {

        let sum = 0;
        let avrage;

        if (!this.dismiss) {
    
            this.#marks.forEach( (num )=> { sum += num });
            
            return sum / this.#marks.length;

        } else {

            return null;

        }
    }

    getInfo() {

        if (!this.dismiss) {
            console.log(`Студент ${this.course} курсу ${this.university}  ${this.fullName}`);
        } else {
            return null;
        }

    }

    dismissStudent() {

        this.dismiss = true;
        return `Студента виключено`;

    }

    recoverStudent() {
        this.dismiss = false;
        return `Студента поновлено`;
    }

    get marks() {

        if (this.dismiss) {
            return null;
        } else {
            return this.#marks;
        }

    }

    set marks(value) {

        if (!this.dismiss) {
            this.#marks.push(value)
        } else {
            return null;
        }
    }

}

let studentProp = new Student("Вищої школи Психотерапії м.Одеса, ", "1го", "Остап Родоманський Бендер");
studentProp.getInfo();
studentProp.marks = 5;
console.log(studentProp.getAverageMark());

studentProp.dismissStudent();
console.log(studentProp.dismissStudent());
studentProp.getInfo();
studentProp.marks = 5;
console.log(studentProp.getAverageMark());

studentProp.recoverStudent();
console.log(studentProp.recoverStudent());
console.log(studentProp.getAverageMark());