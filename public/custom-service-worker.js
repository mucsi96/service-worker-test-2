self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);

  if (event.request.destination) {
    return;
  }

  self.clients
    .matchAll({
      includeUncontrolled: true,
      type: "window",
    })
    .then((clients) => {
      if (clients && clients.length) {
        // Send a response - the clients
        // array is ordered by last focused
        clients[0].postMessage({
          type: "REQUEST",
          request: {
            url: event.request.url,
            credentials: event.request.credentials,
            destination: event.request.destination,
            mode: event.request.mode,
          },
        });
      }
    });

  if (requestUrl.pathname === "/hello") {
    console.log(event.request.url);
    event.respondWith(new Response(JSON.stringify({ hello: "word10" })));
  }
});
