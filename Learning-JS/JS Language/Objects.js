// Object
// const course = {
//     lecture : 10,
//     sections : 3,
//     title : "Javascript",
//     notes : {
//         introduction : "Welcome to the course."
//     },
//     enroll(){
//         console.log("You have sucessfully enrolled in the JS Course.")
//     }
// }

// to run the function inside of the course object
// course.enroll();

// Can also log things side of the course object
// console.log(course.notes.introduction);

// You can also add details to object
// Adding price in it
// course.price = 4999;
// console.log(course)

// Constructor Function
function Course(title) {
    this.title = title;
    this.enroll = function(){
        console.log("You are enrolled sucessfully.");
    }
}

// Factory Function
function CreateCourse(title) {
    return{
        title: title,
        enroll(){
            console.log("You are enrolled sucessfully.");
        }
    }
}

const course = new CreateCourse("JAVA DS");