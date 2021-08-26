
window.function = function (datestring) {
  if (datestring.value === undefined) return undefined;
  
  var date = new Date(datestring.value);
  try {
    var iso_string = date.toISOString();
    return iso_string;
  }
  catch (err) {
    return undefined;
  }
}
