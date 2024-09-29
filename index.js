import express from "express";
const app = express();
const PORT = 3000;

const getMessage = (method) => {
  switch (method) {
    case "POST":
      return "Created Succesfully!";
    case "PATCH":
      return "Details updated successfully!";
    case "PUT":
      return "Details updated successfully!";
    case "DELETE":
      return "Details deleted successfully!";
    default:
      break;
  }
};

const getCommonResponse = (res, method) => {
  return {
    code: res?.statusCode,
    message: getMessage(method),
    status: true,
  };
};
app.get("/", (req, res) => {
  res.send("<h1>Welcome! This is the message of server.</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>Welcome! This is the about of server.</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Welcome! This is the contact of server.</h1>");
});

app.post("/register", (req, res) => {
  res?.status(201).json(getCommonResponse(res, req?.method));
});
app.patch("/register", (req, res) => {
  res?.status(200).json(getCommonResponse(res, req?.method));
});
app.delete("/register", (req, res) => {
  res?.status(200).json(getCommonResponse(res, req?.method));
});
app.put("/register", (req, res) => {
  res?.status(200).json(getCommonResponse(res, req?.method));
});

app.use((req, res, next) => {
  res.status(404).json({
    code: res?.statusCode,
    message: `Sorry, ${res?.method} not found!`,
    status: false,
  });
});
app.use((req, res, next) => {
    res.status(500).json({
      code: res?.statusCode,
      message: `Server Error!`,
      status: false,
    });
  });
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

//This is the common code structure of a method in exporess

/*
 * app.method(Port,callback)
 **MEthod can be get,patch,put,post,delete
 *** Listen is used to just listen what the client has asked. Method
 */
