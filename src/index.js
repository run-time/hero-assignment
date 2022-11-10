import 'bootstrap'
import './sass/main.scss'


jQuery(function ($) {
  $('.newsletter-signup').on('submit', function (e) {
    // submits data via ajax call
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    if (formData.get("email") === "") {
      // do nothing when no email is input (clear querystring)
      window.history.replaceState({}, '', location.pathname);
    } else {
      // validate email and submit form etc.
      submitViaAjax(formData);
      parseQueryParams(formData);
    }
  });
});


function parseQueryParams(formData) {
  const params = new URLSearchParams(location.search);

  formData.forEach(function (value, key) {
    if (key.toLowerCase().startsWith("utm_")) {
      params.set(key, value);
    }
  });

  window.history.replaceState({}, '', `${location.pathname}?${params.toString()}`);
}


// this is a mock ajax call
function submitViaAjax(formData) {
  // DO NOT EDIT BELOW THIS LINE
  var object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  console.log(json);
}