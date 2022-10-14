
var emp_name=document.querySelector('.name');
emp_name.innerHTML=sessionStorage.getItem('employer_name');

async function showServices(){
    var fid=sessionStorage.getItem('fid');
    var services_list=document.querySelector('#services');
    var services=fdb.collection('company').doc('RfRUsgTbyhQLijxXMaMQ').collection('employers')
    .doc(`${fid}`).collection('services');
    var services_qS=await services.get();

    services_qS.forEach(doc=>{

        var service_name=doc.data().service_name;
        var service_during=doc.data().service_during;
        var service_price=doc.data().service_price;
        var newDiv=document.createElement('div');
        var p_title=document.createElement('p');
        var p_price=document.createElement('p');
        newDiv.classList.add('wtd_item');
        newDiv.id=doc.id;
        p_title.classList.add('title');
        p_price.classList.add('price');

        p_price.innerHTML=service_price+'тг, '+service_during+" минут";
        p_title.innerHTML=service_name;
        newDiv.innerHTML=p_title.outerHTML+p_price.outerHTML;
        services_list.insertAdjacentElement('beforeend',newDiv);
        $('.wtd_item').click(function(){
            $('.wtd_item').removeClass("wtd_item_chosen");
            $(this).addClass("wtd_item_chosen");
            var service=$(this).children(".title");
            $('.btn_next').addClass("btn_next_up");
            document.cookie= encodeURIComponent('service') + '=' + encodeURIComponent(service.text());
        
        });
    })
}
/* <div class="wtd_item" id="3">
                <p class="title">Стрижка налысо</p>
                <p class="price">2000тг, 30 минут</p>
            </div>*/

showServices();