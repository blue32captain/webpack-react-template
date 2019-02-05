$(document).ready(function () {
  var input = $("body input.fu");

  input[0].addEventListener('change', fu.select, false);
});

var fu = {
  list: [],
  index: 0,

  select: function (evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.target.files
      ? evt.target.files
      : evt.dataTransfer
        ? evt.dataTransfer.files
        : []; // FileList object

    fu.list = files;
    fu.index = 0;

    fu.load();
  },

  load: function () {
    var index = fu.index;
    var file = fu.list[index];

    if (file) {
      var reader = new FileReader(); // File API object

      reader.onloadend = (function (theFile) {
        return function (evt) {
          if (evt.target.readyState == FileReader.DONE) {
            setTimeout(fu.load, 20);
          }
        };
      })(file);


      reader.onprogress = null;
      reader.onloadstart = null;
      reader.onerror = null;
      reader.onabort = null;

      if (reader.readAsBinaryString) {
        reader.readAsBinaryString(file);
      } else {
        reader.readAsDataURL(file);
      }

      fu.index++;
      $('.fin').html("#" + fu.index);
    } else {
      $('.fin').html("finish");
    }

  }
}
