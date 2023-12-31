const course = {

    courseName : "Maths",
    coursePrice : 999,
    courseInstructor : "Hitesh"
}

// destructuring
// it just makes easy to access
const {} = course
// we don't need to write course.courseInstructor everywhere but just courseInstructor is enough to access
const {courseInstructor} = course

// now we can just write ci instead of courseInstructor
const {courseInstructor : ci} = course

// it will give an error we didn't destructure the coursePrice yet
// console.log(coursePrice);

console.log(courseInstructor); //Hitesh
console.log(ci); //Hitesh

// desturcturing of cp
const {coursePrice } = course
const {coursePrice : cp} = course

console.log(coursePrice);
console.log(cp);