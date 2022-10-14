$('.wtd_item').click(function(){
    $('.wtd_item').removeClass("wtd_item_chosen");
    $(this).addClass("wtd_item_chosen");
    var service=$(this).children(".title");
    $('.btn_next').addClass("btn_next_up");
    document.cookie= encodeURIComponent('service') + '=' + encodeURIComponent(service.text());

});
var emp_name=document.querySelector('.name');
emp_name.innerHTML=sessionStorage.getItem('employer_name');

async function showServices(){
var services=fdb.collection('company').doc('RfRUsgTbyhQLijxXMaMQ').collection('employers')
.doc('MjyUeCNgssGXsrBWVH1K').collection('services')


}
showServices();