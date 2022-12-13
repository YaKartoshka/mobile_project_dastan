


const dropdowns = document.querySelectorAll('.dropdown')
const dropdownsToArray = Array.apply(null, dropdowns);
var mfid=getCookie('mfid');


// dropdownsToArray.forEach(dropdown =>{
//     const service_item = dropdown.querySelector('.service_item');
//     const caret = dropdown.querySelector('.caret');
//     const itemMenu = dropdown.querySelector('.itemMenu');

//     service_item.addEventListener('click', ()=>{
//         caret.classList.toggle('caret-rotate');
//         itemMenu.classList.toggle('itemMenu-open');
//     });
//  });


 function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  
  function setUrl(){
    var first_url=document.getElementById('employers');
    var second_url=document.getElementById('startpage');

    first_url.setAttribute('href',`/${mfid}/a_employers`);
    second_url.setAttribute('href',`/${mfid}`);
    
    console.log(mfid)
}
setUrl();

  async function showServices(){
    var fid_user=sessionStorage.getItem('emp_fid');
    var services_list=document.querySelector('#services');
    var dupl_services=[];
    var employers=fdb.collection('company').doc(`${mfid}`).collection('employers');
    var employers_qS=await employers.get()
    employers_qS.forEach(async(doc)=>{

        var services_qS=await employers.doc(`${doc.id}`).collection('services').get();
        services_qS.forEach(sub_doc=>{
            if(!dupl_services.includes(sub_doc.data().service_name)){
            var service_name=sub_doc.data().service_name;
            dupl_services.push(service_name);
            var service_during=sub_doc.data().service_during;
            var service_price=sub_doc.data().service_price;
            var newDiv=document.createElement('div');
            var p_title=document.createElement('p');
            var p_price=document.createElement('p');
            newDiv.classList.add('wtd_item');
            newDiv.id=sub_doc.id;
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
          }
        })
      
    })
    
    
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

showServices();

