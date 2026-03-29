// app.js

const http = require("http");

const PORT = 3000;

console.log("🔥 Epic Node.js API is starting... 🔥");

const server = http.createServer((req, res) => {
  console.log(`📡 ${req.method} ${req.url}`);

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "🚀 Epic Node.js API is running!",
        status: "success",
        time: new Date().toISOString(),
      })
    );
  } else if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "OK ✅" }));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found ❌" }));
  }
});

server.listen(PORT, () => {
  console.log(`🌐 Server running at http://localhost:${PORT}`);
});