describe('Домашнее задание к лекции 5 «Классы». Дополнительное задание', () => {
  describe('Задача №3', () => {
    let student;
  
    beforeEach(function(){
      student = new Student("Иван Петров");
    });

    it('создание объекта Student', () => {
      expect(student).toBeDefined();
      expect(student.name).toEqual("Иван Петров");
      expect(student.marks).toEqual({});
    });

    it('добавление оценок по разным предметам', () => {
      student.addMark(3, "математика");
      expect(student.marks).toEqual({"математика": [3]});
      student.addMark(5, "математика");
      expect(student.marks).toEqual({"математика": [3, 5]});
      student.addMark(5, "физика");
      expect(student.marks).toEqual({"математика": [3, 5], "физика": [5]});
    });

    it('невозможность добавления некорректных оценок', () => {
      student.addMark(0, "математика");
      expect(student.marks).toEqual({});
      student.addMark(3, "математика");
      expect(student.marks).toEqual({"математика": [3]});
      student.addMark(10, "математика");
      expect(student.marks).toEqual({"математика": [3]});
      student.addMark(7, "физика");
      expect(student.marks).toEqual({"математика": [3]});
    });

    it('подсчёт средней оценки по предмету', () => {
      student.addMark(3, "математика");
      student.addMark(5, "математика");
      expect(student.getAverageBySubject("математика")).toEqual(4);
    });

    it('подсчёт средней оценки по несуществующему предмету', () => {
      student.addMark(3, "математика");
      student.addMark(5, "математика");
      expect(student.getAverageBySubject("программирование")).toEqual(0);
    });

    it('подсчёт общей средней оценки пустого объекта оценок', () => {
      expect(student.getAverage()).toEqual(0);
    });

    it('подсчёт общей средней оценки', () => {
      student.addMark(3, "математика");
      student.addMark(5, "математика");
      student.addMark(5, "история");
      student.addMark(5, "история");
      expect(student.getAverage()).toEqual(4.5);
    });
  });
});
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {}; 
  }

 
  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      console.log(`Оценка ${mark} некорректна и не будет добавлена.`);
      return;
    }

    if (!this.marks[subject]) {
      this.marks[subject] = []; 
    }

    this.marks[subject].push(mark); 
  }

  
  getAverageBySubject(subject) {
    if (!this.marks[subject] || this.marks[subject].length === 0) {
      return 0; 
    }

    const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks[subject].length; 
  }

  
  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0; 
    }

    const totalSum = subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0);
    return totalSum / subjects.length; 
  }
}
const student = new Student("Василиса");


student.addMark(4, "физика");
student.addMark(5, "физика");
student.addMark(5, "физика");
student.addMark(4, "физика");

student.addMark(3, "химия");
student.addMark(4, "химия");

student.addMark(4, "литература");

student.addMark(5, "информатика");
student.addMark(5, "информатика");
student.addMark(5, "информатика");

// Попытка добавить некорректную оценку
student.addMark(6, "математика"); // Оценка не добавится

// Получение средней оценки по предмету
console.log(student.getAverageBySubject("физика")); // 4.5
console.log(student.getAverageBySubject("химия")); // 3.5
console.log(student.getAverageBySubject("математика")); // 0 (такого предмета нет)

// Получение общей средней оценки по всем предметам
console.log(student.getAverage()); // 4.375