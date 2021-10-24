const express = require("express")
const cors = require("cors")
const app = express();

app.use(cors());
app.use(express.json())

const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("Hello I am learning node, This is my first node project")
});

const users = [{ id: 0, name: "Amdadul Sikder", email: "amdadulsikder3@gmail.com", phone: "01822573631" },
{ id: 1, name: "Habib mondol", email: "habibmondol@gmail.com", phone: "01872572541" },
{ id: 2, name: "Anwar Hossain", email: "anwarhossain32@gmail.com", phone: "01755511062" },
{ id: 3, name: "Hasan mahmud", email: "hasan34@gmail.com", phone: "01745254879" },
{ id: 4, name: "Robel Ali", email: "engr.rubelali@gmail.com", phone: "01925447832" }]

app.get("/users", (req, res) => {

    const serach = (req.query.search);
    // use query parameter
    if (serach) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(serach));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
})


// app.METHOD

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)

    //res.send(JSON.stringify(newUser))
    res.json(newUser)

    console.log("hitting the post", req.body);
    res.send("inside the post")
})


// dynamic api

app.get("/users/:id", (req, res) => {
    console.log(req.params.id);
    const id = req.params.id
    const user = users[id]
    res.send(user)
})

app.get("/fruits", (req, res) => {
    res.send(['mango', 'apple', 'guaba', "jackfruite"])
})

app.get("/fruits/mangos/fazli", (req, res) => {
    res.send("yammi yammi misti mango")
})

app.listen(port, () => {
    console.log("listening to port", port);
})
