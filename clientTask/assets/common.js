 function showResult() {
    var input, filter, ul, li, a, i, cnt=0;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("menu-content");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        cnt++;
      } else {
        li[i].style.display = "none";
      }
    }
    if(input.value.length>0)
    {
      $("#counterSpan").text(cnt + " Filtered Result");
    }
    else{
      $("#counterSpan").text("");
    }
  }
      $(function(){
      $(".mainDiv").sortable({
        tolerance: 'pointer',
        revert: 'invalid',
        forceHelperSize: true
      });  
      $( "#menu-content" ).sortable();
      $( "#menu-content" ).disableSelection();
      $(".deleteBtn").click(function(){
        var confirmBox = confirm("Are you sure?");
        if (confirmBox == true) {
          $(this).parent().parent().addClass("hiddenLi");
          $(this).parent().parent().hide("slow", function(){ 
             $(".hiddenLi").remove();
          }); 
       }   
     });
      $(".searchClear").click(function(){
        $("#myInput").val("");
        showResult();
      });
  });
 
  $( 'ul.menu-content li' ).on( 'click', function() {
		$( this ).parent().find( 'li.active' ).removeClass( 'active' );
		$( this ).addClass( 'active' );
  });