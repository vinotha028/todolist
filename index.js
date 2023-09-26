import express from "express";
import bodyparser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));
let items = [];
let item = [];

app.get("/", (req, res) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date();
    let day = today.toLocaleDateString("en-US", options);
    res.render("list.ejs", {
        kindofday: day,
        newlistitems: items,
    });
});


app.get("/TODAY", (req, res) => {
    res.render("/");
});
app.get("/WORK", (req, res) => {
    res.render("/");
});
app.post('/', (req, res) => {
    item = req.body["newitem"];
    items.push(item);
    res.redirect("/");
});


app.listen(port, (req, res) => {
    console.log(`server running on the port ${port}`);
});