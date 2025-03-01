import express from "express";
const app = express();
app.get("/", (req, res, next) => {
    res.send("Hello World");
});
app.put("/", (req, res) => {
    res.send("Hello World");
});
app.post("/", (req, res) => {
    res.send("Hello World");
});
app.delete("/", (req, res) => {
    res.send("Hello World");
});
app.listen(5001, () => {
    console.log("Server is running on port 5001");
});
//# sourceMappingURL=index.js.map