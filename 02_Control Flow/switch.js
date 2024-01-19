// in this we need to give break statement becoz if our key gets match then every code below will get executed without checking key

const Day = 7

switch (Day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        // break;

    default:
        console.log("There's only 7 days in a week");
        break;
}