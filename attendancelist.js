//make an attendance list
//if the user clicks a button , an attendance list will show
//user can add student to present list with button

//make a tardy list
//if the user clicks a button , a tardy list will show
//user add student to tardy list with button

//var classNames [];


/*  $(".showTardy").on('click', 'button', function() {
    $(this).closest('.showTardy').find('.late').slideDown();

  })
  var names = ['Will', 'Nevan', 'Jessica']
  names.forEach(function(element){
   $('.class-list').append(“<li>element</li>”);*/


   var present = []
   var tardy = []
   $('#all').click(function(){
      $('.present-list > li, .tardy-list > li').toggle();
   });
   function presentList(){
    var value = $("#enter").val()
    present.push(value);
    $(".present-list li").remove();
    present.forEach(function(e){
    $(".present-list").append("<li>"+e+"</li>");
    document.getElementById('enter').value="";
   })
   }

   function tardyList(){
   var values = $("#enter").val()
   tardy.push(values);
   $(".tardy-list li").remove();
   tardy.forEach(function(e){
   $(".tardy-list").append("<li>"+e+"</li>");
   document.getElementById('enter').value="";
   })
   }

   $(document).ready(function(){
   $("#present").on("click",presentList);
   $("#tardy").on("click",tardyList);
  /* $("#all").on("click",allList);*/
   });
