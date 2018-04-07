var jsonOBJECTs = [
    
    {
        "name":"Joe",
        "age":"23",
        "weight":"55",
        "height":"5.6",
        "friends":[ "SD", "JD", "KD" ],
        "college":{
            "name":"VVP",
            "city":"MUMBAI",
            "pincode":"434222"
        }
    },
    {
        "name":"Ben",
        "age":"28",
        "weight":"55",
        "height":"5.6",
        "friends":[ "NJ", "DL", "CS" ],
        "college":{
            "name":"SJR",
            "city":"ABD",
            "pincode":"439222"
        }
    },
    {
        "name":"Ana",
        "age":"27",
        "weight":"60",
        "height":"5.6",
        "friends":[ "LS", "JD", "PS" ],
        "college":{
            "name":"LJ",
            "city":"GNGR",
            "pincode":"434222"
        }
    }
];
var jsonString = JSON.stringify(jsonOBJECTs);
console.log(jsonString);