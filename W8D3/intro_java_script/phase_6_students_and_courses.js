function Course(courseName, department, credits, days, timeBlock){
  this.courseName = courseName;
  this.department = department;
  this.credits = credits;
  this.students = new Array;
  this.timeBlock = timeBlock;
  this.days = days;
}

Course.prototype.addStudent = function(student){
  if (  !this.students.includes(student) && (student instanceof Student)  ){
    this.students.push(student);
  }
}

Course.prototype.conflictsWith = function(course){
  let conflict = false;

  course.days.forEach( (day)=> {
    if ( this.days.includes(day) ){
      if(this.timeBlock === course.timeBlock){
        conflict = true;
      }
    }
  })
  return conflict;
}

function Student(first_name, last_name){
  this.first_name = first_name;
  this.last_name = last_name; 
  this.courses = [];
}

Student.prototype.name = function (){
  return `${this.first_name} ${this.last_name}`;
}
Student.prototype.enroll = function (course){ 

  if(  !this.courses.includes(course) && (course instanceof Course)  ){
    if (this.hasConflict(course)){
        throw new Error("This course conflicts with another course");
    }
    else{    
      this.courses.push(course);
    }
  }
}

Student.prototype.hasConflict = function (course){
  let hasConflict = false;
  this.courses.forEach((c) => {
    if (c.conflictsWith(course)) {
      hasConflict = true;
    }
  });

  return hasConflict;
}
Student.prototype.courseLoad = function (){

  let courseLoad = {};
  this.courses.forEach ( (course) => {
    courseLoad[course.department] = course.credits;
  })
  return courseLoad;
}

let s = new Student("Mako", "Nobo");
let c1 = new Course("Bio1", "Biology", 4, ['mon','fri'], 1 );
let c2 = new Course("Bio2", "Biology", 3, ['wed'], 2);
let c3 = new Course("Soc1", "Psychology", 2, ['mon','wed','fri'], 2);

s.enroll(c1);
s.enroll(c2);
s.enroll(c3);



// console.log(s);

