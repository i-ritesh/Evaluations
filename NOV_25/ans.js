
function Student(name, roll_no, class_name, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class_name = class_name;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    this.printTop3Subjects = function () {
        const subjects = Object.keys(this.marks_of_5_subjects);
        subjects.sort((a, b) => this.marks_of_5_subjects[b] -
          this.marks_of_5_subjects[a]);
        console.log("Top 3 Subjects:");
        for (let i = 0; i < 3; i++) {
            console.log(`${i + 1}. ${subjects[i]} - 
            ${this.marks_of_5_subjects[subjects[i]]}`);
        }
    };

    this.printReportCard = function () {
        const totalMarks = Object.values(this.marks_of_5_subjects).reduce((sum, mark) => sum + mark, 0);
        const percentage = (totalMarks / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;

        
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name}`);
        console.log(`| Roll no. - ${this.roll_no}`);
        console.log(`| Class    - ${this.class_name}`);
        console.log(`| Section  - ${this.section}`);
      console.log(`| Science  - ${this.marks_of_5_subjects['science']}`);
      console.log(`| maths  - ${this.marks_of_5_subjects['maths']}`);
      console.log(`| social_science  - ${this.marks_of_5_subjects['social_science']}`);
      console.log(`| english  - ${this.marks_of_5_subjects['english']}`);
      console.log(`| hindi  - ${this.marks_of_5_subjects['hindi']}`);
        console.log(`| Percentage - ${percentage.toFixed(1)}%`);
        console.log("+--------------------+");
    };
}


const ritesh = new Student("Ritesh", 16, "X", "A", {
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
});

ritesh.printTop3Subjects();
ritesh.printReportCard();
