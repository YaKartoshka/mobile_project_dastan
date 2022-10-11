

$('.emp_item').click(function(){
    $('.emp_item').removeClass("emp_item_chosen");
    var name=$(this).children().children(".info").children(".name");
    $(this).addClass("emp_item_chosen");
    
    $('.btn_next').addClass("btn_next_up");
    document.cookie = encodeURIComponent('name') + '=' + encodeURIComponent(name.text());
    sessionStorage.setItem('employer_name',name.text());
    console.log(document.cookie)
});
