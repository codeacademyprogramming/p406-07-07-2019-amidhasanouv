function Student(name, surname, age, phoneNumber) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.phoneNumber = phoneNumber;
}
function Teahcer(name, surname, age, educations, experience) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.educations = educations(SAT,IELTS);
    this.experience = experience(SABIS,CODE);
}
function Class(name, room, teacher, students, totalduration){
    this.name = name;
    this.ROOM = ROOM;
    this.teacher = teacher;
    this.students = students;
    this.totalduration = totalduration;
}


this.getStudentList = function () {
    for (const student of this.students) {
        this.console.log(`${student.name} ${student.surname}`);
    }
}