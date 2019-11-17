$(function() {
  var $list = $("ul");
  var $newItemForm = $("#newItemForm");

  $newItemForm.on("submit", function(e) {
    e.preventDefault();
    
    var valoareInputText = $("input:text").val();

    $list.append("<li>" + valoareInputText + "</li>");
    $("input:text").val("");
  });

  $list.on("click", "li", function() {
    $(this).remove();
  });
});
