/* eslint-disable no-restricted-globals */

self.addEventListener("push", function (event) {
  event.waitUntil(
    self.registration.showNotification("Tempmail", {
      body: "Testando...",
    })
  );
});

/* eslint-enable no-restricted-globals */
