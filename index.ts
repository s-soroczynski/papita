import express from "express";
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Hello Worl22sssssssssssssssss2d!");
});
app.listen(PORT, () => {
  console.log(`Express dservssssssser isdss listening at ${PORT}`);
});

//npm run start:dev
//sudo docker build . -t eb  - image
//sudo docker run -p 3000:3000 -v $(pwd):/src/app -it eb bash - container
//npm run start:dev
