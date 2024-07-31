const express = require("express");
const xlsx = require('xlsx');
const app = express();
const PORT = process.env.PORT || 3000;


let wb = xlsx.readFile('students.xlsx');
let ws = wb.Sheets['Sheet1'];

app.get('/', (req, res) => {
    res.send("Hey")
})

app.get('/students', (req, res) => {
    let data = xlsx.utils.sheet_to_json(ws);
    res.send(data)
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});