import express from "express";
import saves from "./models/saves.js";

const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded());

app.get("/saves/", (req, res) => {
  res.render("saves", {
    title: "saves",
    saves: saves.getCategorySummaries(),
  });
});

app.get("/new_save/", (req, res) => {
  res.render("new_save", {
    title: "new_save",
  });
});

app.post("/saves/new", (req, res) => {
  const save_id = req.params.save_id;
  if (!saves.hasCategory(save_id)) {
    res.sendStatus(404);
  } else {
    saves.addCard(save_id, {
      progress: req.progress,
    });
    res.redirect(`/saves/${save_id}`);
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});