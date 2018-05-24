$("ul.toDoList").on("click","li",function(){
    $(this).toggleClass("done")
   
})
$("ul.toDoList").on("click","span",function(event){
    event.stopPropagation()
    $(this).parent().fadeOut(2000,function(){
        $(this).remove();   
    });
   //$(this).parent().remove();

})
$('input[type = "text"]').keypress(function(event){
    if(event.which === 13){
     var newTodo =  $(this).val()
     $(this).val("")
     $("ul.toDoList").append("<li><span class = 'delete'><i class='fas fa-trash'></i> </span>"+ newTodo + "</li>") 
    }

})
$("#toggle-form").click(function(){
    $("input[type = 'text']").fadeToggle() 
})
    

