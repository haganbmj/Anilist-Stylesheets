/* global $ WebSocket */

// Kill any existing user styles loaded by anilist.
function removeExistingCSS() {
  $('link[ng-if="!listVm.customCss.css"]').remove();
}

// Inject the current stylesheet.
function inject(id) {
  if ($(`#${id}`).length) { // Verify that the stylesheet ever only exists once on the page?
    return;
  }

  const newElement = `<link rel="stylesheet" id=${id} href="https://localhost:8080/index.css"/>`;
  $(newElement).insertAfter($('link').last());
  console.log('Fresh CSS injected');
}

// Remove previously loaded stylesheets and inject the current.
async function loadCSS() {
  $('link[id="anilist-inject-css"]').remove();
  inject('anilist-inject-css');
}

(() => {
  const socket = new WebSocket('wss://localhost:8080');
  socket.onopen = () => {
    console.log('Hot Reload WebSocket Connection Established');
    removeExistingCSS();
    loadCSS();
  };
  socket.onmessage = () => {
    loadCSS();
  };
})();
