(function() {
  var menuLinks = document.getElementById('#menu-links-container');
  var body = document.body;
  function getWindowSize(size) {
    if (size.matches) {
      body.removeChild(menuLinks);
    } else {
      console.log("Not OK");
    }
  }

  var size = window.matchMedia("(min-width: 991px)");
  getWindowSize(size);
  size.addListener(getWindowSize);

})()
