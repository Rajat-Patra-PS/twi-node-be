const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const port = process.env.PORT || 8080;

const data = {
    '2021-10-23' : [
        { id: 1, name: 'Google.com', totalVisits: 350000412 },
        { id: 2, name: 'Amazon.com', totalVisits: 25000456 },
        { id: 3, name: 'Facebook.com', totalVisits: 24001459 },
        { id: 4, name: 'YouTube.com', totalVisits: 22305607 },
        { id: 5, name: 'Wikipedia.org', totalVisits: 10305607 }
    ],
    '2021-10-24' : [
        { id: 1, name: 'Google.com', totalVisits: 691240412 },
        { id: 2, name: 'YouTube.com', totalVisits: 45123456 },
        { id: 3, name: 'Wikipedia.org', totalVisits: 35781459 },
        { id: 4, name: 'Amazon.com', totalVisits: 17505607 },
        { id: 5, name: 'Facebook.com', totalVisits: 13559607 }
    ],
    '2021-10-25' : [
        { id: 1, name: 'Facebook.com', totalVisits: 874567412 },
        { id: 2, name: 'YouTube.com', totalVisits: 67987456 },
        { id: 3, name: 'Ebay.com', totalVisits: 56783452 },
        { id: 4, name: 'Twitter.com', totalVisits: 45679876 },
        { id: 5, name: 'Yahoo.com', totalVisits: 20456712 }
    ],
    '2021-10-26' : [
        { id: 1, name: 'YouTube.com', totalVisits: 78903456 },
        { id: 2, name: 'Instagram.com', totalVisits: 54632314 },
        { id: 3, name: 'Facebook.com', totalVisits: 34568746 },
        { id: 4, name: 'Twitter.com', totalVisits: 27875614 },
        { id: 5, name: 'Yahoo.com', totalVisits: 19645723 }
    ],
    '2021-10-27' : [
        { id: 1, name: 'Google.com', totalVisits: 99873451 },
        { id: 2, name: 'Instagram.com', totalVisits: 45678934 },
        { id: 3, name: 'Facebook.com', totalVisits: 34657890 },
        { id: 4, name: 'Stackoverflow.com', totalVisits: 23678945 },
        { id: 5, name: 'Wikipedia.com', totalVisits: 21345678 }
    ]
}
app.get('/', (req, res) => {
    res.status(200).send("Welcome to the app...")
})
app.get('/api/getWebsites/', (req, res) => {
    let selectedDate = req.query.sDate;
    if (data.hasOwnProperty(selectedDate)) {
        res.status(200).send({res:data[selectedDate], message:'Success'})
    } else {
        res.status(404).send({res:[], message: 'Data Not Found'})
    }
})

app.listen(port, ()=>{
    console.log(`Server started at ${port}`)
});
