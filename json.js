var fs = require('fs');

var ericData= fs.readFileSync('eric.json');
var ericString = ericData.toString();
var ericJSON= JSON.parse(ericString);

ericJSON.people.forEach(function (person) {
    console.log(person.name);
    console.log(person.job);
    person.classes.forEach(function(course){
        console.log(course.name);
        console.log(course.location);
    });
})


