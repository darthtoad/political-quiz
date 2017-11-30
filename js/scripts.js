$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var asshole = $("input:radio[name=1]:checked").val();
    var racist = $("input:radio[name=2]:checked").val();
    var rich = $("input:radio[name=3]:checked").val();
    if (asshole === "yes" && racist === "yes" && rich === "yes") {
      $(".conservative").show();
      $(".liberal").hide();
    } else {
      $(".liberal").show();
      $(".conservative").hide();
    }
  })
})
