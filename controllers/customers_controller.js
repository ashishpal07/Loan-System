
const loanDetail = require("../models/loanDetail");
const Customer = require("../models/customer");

// tire1 & tire2 cities

let checkTire = {
    banaglore: "tire1",
    mumbai: "tire1",
    delhi: "tire1",
    chennai: "tire1",
    hydrabad: "tire1",
    mysore: "tire2",
    hubli: "tire2",
    dharwad: "tire2",
    belgaum: "tire2",
    shimoga: "tire2"
}

// let date = "01/28/1997";
function getAge(date){
    let dob = new Date(date);
    let month_diff = Date.now() - dob.getTime();  // calculate month diff from curr date
    let age_dt = new Date(month_diff);  // convert the calculated diff in date format
    let year = age_dt.getUTCFullYear();  // extract year from date
    let age = Math.abs(year - 1970);   // now calculate the age of the user
    return age;
}


module.exports.rejectOrApprove = (req, res) => {
    let {name, dob, city, creditScore, loanAmount} = req.body;
    if(!name || !dob || !city || !creditScore || !loanAmount){
        console.log("All fields are require");
        return;
    }

    // loan amount criteria
    if(loanAmount < 50000){
        console.log("Lan amount is minimum 50000");
        return;
    }

    if(creditScore < 0 || creditScore > 900){
        console.log("Enter valid credit score");
        return;
    }

    let status;
    let rateOfIntrest;

    // age criteria
    let age = getAge(dob);
    if(age < 18){
        status = "reject";
        return;
    }

    if(age + 1 > 60){
        status = "reject";
        return;
    }

    // city and creditScore criteria
    let tire = checkTire.city;
    if(tire === "tire1"){
        if(creditScore < 300){
            status = "reject";
        }else if(creditScore >= 300 && creditScore <= 500){
            status = "approved";
            rateOfIntrest = 14;
        }else if(creditScore >= 501 && creditScore <= 700){
            status = "approved";
            rateOfIntrest = 12;
        }else if(creditScore >= 701 && creditScore <= 800){
            status = "approved";
            rateOfIntrest = 12;
        }else if(creditScore >= 801 && creditScore <= 900){
            status = "approved";
            rateOfIntrest = 10;
        }
    }else{
        if(creditScore < 300){
            status = "reject";
        }else if(creditScore >= 300 && creditScore <= 500){
            status = "reject";
        }else if(creditScore >= 501 && creditScore <= 700){
            status = "approved";
            rateOfIntrest = 13;
        }else if(creditScore >= 701 && creditScore <= 800){
            status = "approved";
            rateOfIntrest = 13;
        }else if(creditScore >= 801 && creditScore <= 900){
            status = "approved";
            rateOfIntrest = 11;
        }
    }

    

}



// loanAmount, creditScore, age, status, rateOfIntrest, city, principle, interest