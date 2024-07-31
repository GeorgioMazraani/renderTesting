const express = require("express");
const xlsx = require('xlsx');
var cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors())

let wb = xlsx.readFile('employees.xlsx');
let ws = wb.Sheets['Sheet1'];

let data = xlsx.utils.sheet_to_json(ws);

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/students', (req, res) => {
    res.send(data)
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});