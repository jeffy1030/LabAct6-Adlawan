$(() => {
    const data = [
        //FIRST YEAR, FIRST SEM
        {
            "course": "NSTP01",
            "description": "Civic Welfare Training Service 1",
            "unit": 3,
            "grade": 1.20,
            "remarks": "Passed",
            "term": "First Semester A.Y 2022-2023"
        },
        {
            "course": "SCITEC",
            "description": "Science, Technology and Society",
            "unit": 3,
            "grade": 1.20,
            "remarks": "Passed",
            "term": "First Semester A.Y 2022-2023"
        },
        {
            "course": "INTCOM",
            "description": "Introduction to Computing",
            "unit": 3,
            "grade": 1.70,
            "remarks": "Passed",
            "term": "First Semester A.Y 2022-2023"
        },
        {
            "course": "COPRO1",
            "description": "Computer Programming 1",
            "unit": 3,
            "grade": 2.00,
            "remarks": "Passed",
            "term": "First Semester A.Y 2022-2023"
        },
        {
            "course": "COMPOP",
            "description": "Computer Operations: Office Productivity Software(MS Office)",
            "unit": 3,
            "grade": 1.80,
            "remarks": "Passed",
            "term": "First Semester A.Y 2022-2023"
        },
        {
            "course": "PEDUC1",
            "description": "Physical Activities Towards Health and Fitness 1",
            "unit": 2,
            "grade": 3.00,
            "remarks": "Passed",
            "term": "First Semester A.Y 2022-2023"
        },
        {
            "course": "JRIZAL",
            "description": "Life, Works and Writings of Jose Rizal",
            "unit": 2,
            "grade": 3.00,
            "remarks": "Passed",
            "term": "First Semester A.Y 2022-2023"
        },

        //FIRST SEM, SECOND SEMESTER
        {
            "course": "OOPROG",
            "description": "Object-Oriented Programming",
            "unit": 3,
            "grade": 2.20,
            "remarks": "Passed",
            "term": "Second Semester A.Y 2022-2023"
        },
        {
            "course": "ARTAPP",
            "description": "Art Appreciation",
            "unit": 3,
            "grade": 1.80,
            "remarks": "Passed",
            "term": "Second Semester A.Y 2022-2023"
        },
        {
            "course": "PURCOM",
            "description": "Purposive Communication",
            "unit": 3,
            "grade": 2.30,
            "remarks": "Passed",
            "term": "Second Semester A.Y 2022-2023"
        },
        {
            "course": "NSTP02",
            "description": "Civic Welfare Training Service 2",
            "unit": 3,
            "grade": 3.00,
            "remarks": "Passed",
            "term": "Second Semester A.Y 2022-2023"
        },
        {
            "course": "DSTRU1",
            "description": "Discrete Structures",
            "unit": 3,
            "grade": 2.80,
            "remarks": "Passed",
            "term": "Second Semester A.Y 2022-2023"
        },
        {
            "course": "PEDUC2",
            "description": "Physical Activities Towards Health and Fitness 2",
            "unit": 2,
            "grade": 2.40,
            "remarks": "Passed",
            "term": "Second Semester A.Y 2022-2023"
        },
        {
            "course": "COPRO2",
            "description": "Computer Programming 2",
            "unit": 2,
            "grade": 3.00,
            "remarks": "Passed",
            "term": "Second Semester A.Y 2022-2023"
        },
        {
            "course": "MATMOD",
            "description": "Mathematics In The Modern World",
            "unit": 2,
            "grade": 3.00,
            "remarks": "Passed",
            "term": "Second Semester A.Y 2022-2023"
        },

        //THIRD SEM
        {
            "course": "ANIMUL",
            "description": "Animation and Multimedia",
            "unit": 3,
            "grade": 2.40,
            "remarks": "Passed",
            "term": "First Semester A.Y 2023-2024"
        },
        {
            "course": "HUMCOM",
            "description": "Human Computer Interaction",
            "unit": 3,
            "grade": 1.60,
            "remarks": "Passed",
            "term": "First Semester A.Y 2023-2024"
        },
        {
            "course": "DASTRU",
            "description": "Data Structures and Algorithms",
            "unit": 3,
            "grade": 1.70,
            "remarks": "Passed",
            "term": "First Semester A.Y 2023-2024"
        },
        {
            "course": "NETWRK",
            "description": "CCNA Exploration: Network Fundamentals",
            "unit": 3,
            "grade": 1.80,
            "remarks": "Passed",
            "term": "First Semester A.Y 2023-2024"
        },
        {
            "course": "PEDUC3",
            "description": "Physical Activities Towards Health and Fitness 3",
            "unit": 2,
            "grade": 3.00,
            "remarks": "Passed",
            "term": "First Semester A.Y 2023-2024"
        },
        {
            "course": "GEEL01",
            "description": "General Education Elective 1",
            "unit": 3,
            "grade": 2.50,
            "remarks": "Passed",
            "term": "First Semester A.Y 2023-2024"
        },
        {
            "course": "UNDSLF",
            "description": "Understanding the Self",
            "unit": 3,
            "grade": 1.90,
            "remarks": "Passed",
            "term": "First Semester A.Y 2023-2024"
        },
        //FOURTH SEM
        {
            "course": "INMANA",
            "description": "Information Management",
            "unit": 3,
            "grade": 1.60,
            "remarks": "Passed",
            "term": "Second Semester A.Y 2023-2024"
        },
        {
            "course": "EVEDRI",
            "description": "Event-Driven Programming",
            "unit": 3,
            "grade": 2.70,
            "remarks": "Passed",
            "term": "Second Semester A.Y 2023-2024"
        },
        {
            "course": "PROEL1",
            "description": "Professional Elective 1",
            "unit": 3,
            "grade": 2.20,
            "remarks": "Passed",
            "term": "Second Semester A.Y 2023-2024"
        },
        {
            "course": "TECHNO",
            "description": "Technopreneurship",
            "unit": 3,
            "grade": 2.20,
            "remarks": "Passed",
            "term": "Second Semester A.Y 2023-2024"
        },
        {
            "course": "CONWOR",
            "description": "The Contemporary World",
            "unit": 3,
            "grade": 1.00,
            "remarks": "Passed",
            "term": "Second Semester A.Y 2023-2024"
        },
        {
            "course": "GEEL02",
            "description": "General Education Elective 2",
            "unit": 3,
            "grade": 2.90,
            "remarks": "Passed",
            "term": "Second Semester A.Y 2023-2024"
        },
        {
            "course": "PEDUC4",
            "description": "Physical Activities Towards Health and Fitness 3",
            "unit": 2,
            "grade": 3.00,
            "remarks": "Passed",
            "term": "Second Semester A.Y 2023-2024"
        },

        //FIFTH SEM
        {
            "course": "SOFENG",
            "description": "Software Engineering",
            "unit": 3,
            "grade": "",
            "remarks": "In Progress",
            "term": ""
        },
        {
            "course": "WEBTEC",
            "description": "Web Technology",
            "unit": 3,
            "grade": "",
            "remarks": "In Progress",
            "term": ""
        },
        {
            "course": "SYSTIN",
            "description": "System Integration and Architecture",
            "unit": 3,
            "grade": "",
            "remarks": "In Progress",
            "term": ""
        },
        {
            "course": "MOBAPP_",
            "description": "Mobile Application",
            "unit": 3,
            "grade": "",
            "remarks": "In Progress",
            "term": ""
        },
        {
            "course": "PROEL2",
            "description": "Professional Elective 2",
            "unit": 3,
            "grade": "",
            "remarks": "In Progress",
            "term": ""
        },
        {
            "course": "RESMET",
            "description": "Research Methods in IT",
            "unit": 3,
            "grade": "",
            "remarks": "In Progress",
            "term": ""
        },

        //SIXTH SEM
        {
            "course": "CPSTON1",
            "description": "Capstone Project 1",
            "unit": 3,
            "grade": "", 
            "remarks": "", 
            "term": ""
        },
        {
            "course": "PROEL3",
            "description": "Professional Elective 3",
            "unit": 3,
            "grade": "", 
            "remarks": "", 
            "term": ""
        },
        {
            "course": "PROEL4",
            "description": "Professional Elective 4",
            "unit": 3,
            "grade": "", 
            "remarks": "", 
            "term": ""
        },
        {
            "course": "SYSTAD",
            "description": "System Administration and Maintenance",
            "unit": 3,
            "grade": "", 
            "remarks": "", 
            "term": ""
        },
        {
            "course": "APPDEV",
            "description": "Application Development and Emerging Technologies",
            "unit": 3,
            "grade": "", 
            "remarks": "", 
            "term": ""
        },
        {
            "course": "SOCPRO",
            "description": "Social and Professional Issues",
            "unit": 3,
            "grade": "", 
            "remarks": "", 
            "term": ""
        },

        //SEVENTH SEM
        {
            "course": "GEEL03",
            "description": "General Education Elective 3.0",
            "unit": 3,
            "grade": "", 
            "remarks": "", 
            "term": "" 
        },
        {
            "course": "OPESYS",
            "description": "Operating System",
            "unit": 3,
            "grade": "", 
            "remarks": "", 
            "term": "" 
        },
        {
            "course": "ITPRA1",
            "description": "IT Practicum 1 (250 Hours)",
            "unit": 3,
            "grade": "", 
            "remarks": "", 
            "term": "" 
        },
        {
            "course": "CPSTON2",
            "description": "Capstone Project 2",
            "unit": 3,
            "grade": "", 
            "remarks": "", 
            "term": "" 
        },
        {
            "course": "INFASS",
            "description": "Information Assurance and Security",
            "unit": 3,
            "grade": "", 
            "remarks": "", 
            "term": "" 
        },
        //EIGHTH SEM
        {
            "course": "PHIHIS",
            "description": "Readings in Philippine History",
            "unit": 3,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        {
            "course": "PLATEC",
            "description": "Platform Technologies",
            "unit": 3,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        {
            "course": "BUSANA",
            "description": "Business Analytics",
            "unit": 3,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        {
            "course": "ITPRA2",
            "description": "IT Practicum 2 (250 Hours)",
            "unit": 3,
            "grade": "",
            "remarks": "",
            "term": ""
        },
        {
            "course": "ETHICS",
            "description": "Ethics",
            "unit": 3,
            "grade": "",
            "remarks": "",
            "term": ""
        }

    ];

    const firstSem = data.filter(item => item.term.includes("First Semester A.Y 2022-2023"));
    const secondSem = data.filter(item => item.term.includes("Second Semester A.Y 2022-2023"));

    const thirdSem = data.filter(item => item.term.includes("First Semester A.Y 2023-2024"));
    const fourthSem = data.filter(item => item.term.includes("Second Semester A.Y 2023-2024"));

    const fifthSem = data.filter(item => item.remarks.includes("In Progress"));

    const sixSem = data.filter(course => {
        return ["CPSTON1", "PROEL3", "PROEL4", "SYSTAD", "APPDEV", "SOCPRO"].includes(course.course)
    });

    const seventhSem = data.filter(course => {
        return ["GEEL03", "OPESYS", "ITPRA1", "CPSTON2", "INFASS"].includes(course.course)
    });     

    const eighthSem = data.filter(course => {
        return ["PHIHIS", "PLATEC", "BUSANA", "ITPRA2", "ETHICS"].includes(course.course)
    });    

    firstSem.forEach(item => {
        console.log(item);
        $("#1st-sem").append(
            `<tr class = "course-already-taken">
                <td>${item["course"]}</td>
                <td>${item["description"]}</td>
                <td>${item["unit"]}</td>
                <td>${item["grade"]}</td>
                <td>${item["remarks"]}</td>
                <td>${item["course"]}</td>
                <td>${item["term"]}</td>
            </tr>`
        )
    });

    secondSem.forEach(item => {
        console.log(item);
        $("#2nd-sem").append(
            `<tr class = "course-already-taken">
                <td>${item["course"]}</td>
                <td>${item["description"]}</td>
                <td>${item["unit"]}</td>
                <td>${item["grade"]}</td>
                <td>${item["remarks"]}</td>
                <td>${item["course"]}</td>
                <td>${item["term"]}</td>
            </tr>`
        )
    }) 

    thirdSem.forEach(item => {
        console.log(item);
        $("#3rd-sem").append(
            `<tr class = "course-already-taken">
                <td>${item["course"]}</td>
                <td>${item["description"]}</td>
                <td>${item["unit"]}</td>
                <td>${item["grade"]}</td>
                <td>${item["remarks"]}</td>
                <td>${item["course"]}</td>
                <td>${item["term"]}</td>
            </tr>`
        )
    }) 

    fourthSem.forEach(item => {
        console.log(item);
        $("#4th-sem").append(
            `<tr class = "course-already-taken">
                <td>${item["course"]}</td>
                <td>${item["description"]}</td>
                <td>${item["unit"]}</td>
                <td>${item["grade"]}</td>
                <td>${item["remarks"]}</td>
                <td>${item["course"]}</td>
                <td>${item["term"]}</td>
            </tr>`
        )
    }) 

    fifthSem.forEach(item => {
        console.log(item);
        $("#5th-sem").append(
            `<tr class = "course-taken">
                <td>${item["course"]}</td>
                <td>${item["description"]}</td>
                <td>${item["unit"]}</td>
                <td>${item["grade"]}</td>
                <td>${item["remarks"]}</td>
                <td>${item["term"]}</td>
                <td>${item["term"]}</td>
            </tr>`
        )
    }) 

    sixSem.forEach(item => {
        console.log(item);
        $("#6th-sem").append(
            `<tr>
                <td>${item["course"]}</td>
                <td>${item["description"]}</td>
                <td>${item["unit"]}</td>
                <td>${item["grade"]}</td>
                <td>${item["remarks"]}</td>
                <td>${item["term"]}</td>
                <td>${item["term"]}</td>
            </tr>`
        )
    }) 

    seventhSem.forEach(item => {
        console.log(item);
        $("#7th-sem").append(
            `<tr>
                <td>${item["course"]}</td>
                <td>${item["description"]}</td>
                <td>${item["unit"]}</td>
                <td>${item["grade"]}</td>
                <td>${item["remarks"]}</td>
                <td>${item["term"]}</td>
                <td>${item["term"]}</td>
            </tr>`
        )
    }) 

    eighthSem.forEach(item => {
        console.log(item);
        $("#8th-sem").append(
            `<tr>
                <td>${item["course"]}</td>
                <td>${item["description"]}</td>
                <td>${item["unit"]}</td>
                <td>${item["grade"]}</td>
                <td>${item["remarks"]}</td>
                <td>${item["term"]}</td>
                <td>${item["term"]}</td>
            </tr>`
        )
    }) 
});