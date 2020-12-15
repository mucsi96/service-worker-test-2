self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);

  if (requestUrl.pathname === "/hello") {
    console.log(event.request.url);
    event.respondWith(new Response(JSON.stringify({ hello: "word10" })));
  }
});
