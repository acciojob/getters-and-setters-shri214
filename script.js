//complete this code
class Person {
	constructor(name, age){
		this.name=name;
		this.age=age;
	}
	setter(newage){
		this.age=newage;
	}
	getter(){
		return this.name;
	}
}

class Student extends Person {
	consturctor(name, age){
		super(name, age)
	}
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	consturctor(name, age){
		super(name, age)
	}
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
