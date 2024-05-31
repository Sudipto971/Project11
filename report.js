const newman = require('newman');
 require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/27409357-97a0dea4-28b7-4bfa-8ac4-96d6ce0fef45?access_key=${process.env.secretKey}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});


