
var emp_name=document.querySelector('.name');
emp_name.innerHTML=sessionStorage.getItem('employer_name');
var mfid=getCookie('mfid');
setUrl();
function setUrl(){
    var first_url=document.getElementById('employers');
    var second_url=document.getElementById('appointment');
    first_url.setAttribute('href',`/${mfid}/employers`);
    second_url.setAttribute('href',`/${mfid}/appointment`);
}

async function showServices(){
    var fid_user=sessionStorage.getItem('mfid');
    var services_list=document.querySelector('#services');
    var services=fdb.collection('company').doc(`${mfid}`).collection('employers')
    .doc(`${fid_user}`).collection('services');
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
            var service_data=$(this).children(".price")
            $('.btn_next').addClass("btn_next_up");
            document.cookie= encodeURIComponent('service') + '=' + encodeURIComponent(service.text());
            sessionStorage.setItem('service_data',service_data.text());
        
        });
    })
}
/* <div class="wtd_item" id="3">
                <p class="title">Стрижка налысо</p>
                <p class="price">2000тг, 30 минут</p>
            </div>*/

showServices();
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
