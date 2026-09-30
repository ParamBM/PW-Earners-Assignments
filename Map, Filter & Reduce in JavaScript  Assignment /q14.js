const mailIds = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"];

// const gmails = mailIds.filter(gmail => gmail.includes("@gmail.com"))
const gmails = mailIds.filter(gmail => gmail.endsWith("@gmail.com"))   // Safest

console.log(gmails);