var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

for(keys in bio.contacts){
    console.log(bio.contacts[keys]);
    $("#header #topContacts").append(HTMLcontactGeneric.replace("%contact%",keys)
            .replace("%data%",bio.contacts[keys]));
}

// Put Your Image
$("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));

// Put your welcome message here
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

//sd_786278
//19538.09

// $("#header").append(HTMLskills.replace("%data%", bio.skills));
// $("#main").append(skills);

if (bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(skill){
        var formattedSkill = HTMLskills.replace("%data%",skill);
        $("#skills").append(formattedSkill);
    });
}

//  Work exp
function displayWork(){
    $("#workExperience").append(HTMLworkStart);

    work.jobs.forEach(function(job) {
        // var job = work.jobs[jobId]; this was used when for-in was used to write the code
        var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer) ;
        var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle ;
        $(".work-entry:last")
            .append(formattedEmployerTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%",job.start + " - " + job.dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%",job.location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%",job.description));
    });
}
displayWork();

$("#education").append(HTMLschoolStart);
education.schools.forEach(function(school){
    $(".education-entry")
     .append(HTMLschoolName.replace("%data%",school.name) + HTMLschoolDegree.replace("%data%",school.degree));
    $(".education-entry").append(HTMLschoolDates.replace("%data%", school.dates));
    $(".education-entry").append(HTMLschoolLocation.replace("%data%",school.location));
    if (school.major) {
        var mjrString = "";
        school.major.forEach(function(mjr,idx){
            mjrString += mjr ;
            if (idx < school.major.length-1){
                mjrString += ", ";
            }
        });
        $(".education-entry").append(HTMLschoolMajor.replace("%data%",mjrString));
    }
});

$(".education-entry").append(HTMLonlineClasses);
education.online.forEach(function(cls){
    $(".education-entry")
     .append(HTMLonlineTitle.replace("%data%",cls.title) + HTMLonlineSchool.replace("%data%",cls.school));
    $(".education-entry").append(HTMLonlineDates.replace("%data%", cls.dates));
    $(".education-entry").append(HTMLonlineURL.replace("%data%",cls.url));
});

projects.display = function(){    
    projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last")
        .append(HTMLprojectTitle.replace("%data%",project.title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",project.description));
        if(project.images && project.images.length > 0){
            project.images.forEach(function(image){
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%",image));
            });
        }
    });
}();

// function inName() {
//     // Your code goes here!
//     var names = name.trim().split(" ");
//     names[1] = names[1].toUpperCase();
//     names[0] = names[0].charAt(0).toUpperCase() + names[0].toLowerCase().slice(1)
    
//     return names[0] + " " + names[1];
// }
// $("#main").append(internationalizeButton);

//  Map and all
$("#mapDiv").append(googleMap);

