var bio = {
    "name" : "Sagar Jariwala",
    "role" : "Software Engineer",
    "contacts" : {
        "mobile": "+91-9886465961",
        "email": "jariwala.bhishma@gmail.com",
        "github": "jsagar87",
        "twitter": "@JariwalaSagar",
        "location": "Bangalore, Karnataka"
    },
    "welcomeMessage": "Bhale Padharya",
    "skills": ["awesomeness", "programming", "teaching", "JS"],
    // "skills": [],
    "bioPic": "images/me.jpeg"
}

var gamingProfile = {
    "firstGame" : "nintendo",
    "firstFew3DgamesPC" : [
        {
            "name" : "Nightmare Creature",
            "console" : "PC"
        },
        {
            "name" : "Popeye",
            "console" : "nintendo handheld"
        }
    ]
};

var work = {
    "jobs" : [
        {
            "start" : "Oct, 2015",
            "employer" : "Hewlett Packard Enterprise",
            "title": "Specialist",
            "dates": "Future",
            "location": "Bangalore, Karnataka",
            "description":"Responsible for end to end System component design and development process."
        },
        {
            "start" : "April, 2013",
            "employer" : "Avansys Software Pvt. Ltd.",
            "title": "Senior Software Developer",
            "dates": "October, 2015",
            "location": "Bangalore, Karnataka",
            "description": "Quality metrics, ETL process and middleware and UI development for HPE as a client"
        },
        {
            "start" : "February, 2011",
            "employer" : "Stragure Software Pvt. Ltd.",
            "title": "Associate Developer",
            "dates": "March, 2013",
            "location": "Bangalore, Karnataka",
            "description": "Developed a product from scratch,"
        }
    ]
};
    

var projects = [
    {
        "title" : "OneView",
        "dates" : "2015",
        "description" : "OneView Manages and Monitors Composable Infrastucture.",
        "images" : ["images/synergy.jpg" /*, "images/packshot.jpg" */]

    },
    {
        "title" : "StarWorks",
        "dates" : "2015",
        "description" : "Tool to capture data for business processes. Dashboard of plots indicating performance based upon predefined Key Performance Indicators. Different views for different roles.",
        "images" : null

    }
];

// Education object using object literal notation
var education = {
    "schools" : [
        {
            "name" : "BTL Inst. of Tech and Management, VTU",
            "location" : "Bangalore",
            "degree" : "B.E.",
            "major" : [ "Electronics", "Communication", "Embedded Systems" ],
            "dates" : "2010"
        }
    ],
    "online" : [
        {
            "title"  : "Deep Learning Specialization",
            "school" : "coursera",
            "dates" : "2019",
            "url" : "https://www.coursera.org/account/accomplishments/specialization/SMHRB9SA9SQD"
        },
        {
            "title"  : "Scalable Machine Learning",
            "school" : "edX",
            "dates" : "2015",
            "url" : "https://verify.edx.org/cert/1d6ba39092274e489092d65afb1b8b1a"
        },
        {
            "title"  : "Introduction to Big Data with Apache Spark",
            "school" : "edX",
            "dates" : "2015",
            "url" : "https://verify.edx.org/cert/817d110c60b54d4e945467d9b216c557"
        },
        {
            "title"  : "JavaScript Basics",
            "school" : "Udacity",
            "dates" : "2018",
            "url" : "https://udacity.com/courses/ud804/"
        }
    ]
};

// Start building resume site using template and appending to the DOM
