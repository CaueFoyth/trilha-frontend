class Student {
    name;
    #grades = [];

    constructor(name) {
        this.name = name;
    }   

    addGrade(grade) {
        if (typeof grade !== 'number') {
            throw new Error("A nota deve ser um número.");
        }
        this.#grades.push(grade);
    }

    average() {
        if (this.#grades.length === 0) {
            return 0;
        }
        let total = 0;
        for (const grade of this.#grades) {
            total += grade;
        }
        return total / this.#grades.length;
    }

}

let student = new Student("João");
student.addGrade(8);
student.addGrade(9);
student.addGrade(10);
console.log(`Média de ${student.name}: ${student.average()}`);
