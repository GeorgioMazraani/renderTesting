const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hey")
})

app.get('/students', (req, res) => {
    var data = [
        { id: 1, name: 'Georgio Mazraani' },
        { id: 2, name: 'Sarah Al Najjar' },
        { id: 3, name: 'Marina Mazraani' },
        { id: 4, name: 'David Mazraani' }
    ];
    res.send(data)
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});