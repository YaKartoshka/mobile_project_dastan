
var fid=getCookie('fid');
setUrl();
showEmployers();
function setUrl(){
    var first_url=document.getElementById('services');
    var first_action=document.getElementById('appointment');
    first_action.setAttribute('action',`/${fid}/appointment`);
    first_url.setAttribute('href',`/${fid}/services`);
    console.log(fid)
}

async function showEmployers(){
    console.log('start');
    var employer_div=document.querySelector('.employers');
    var service_name=decodeURI(getCookie('service'));
    const employers=fdb.collection('company').doc(`${fid}`).collection('employers');
    const employers_qS=await employers.get();
   
    employers_qS.forEach(async(doc)=>{

            var services_qS=await employers.doc(`${doc.id}`).collection('services').get();
            services_qS.forEach(sub_doc=>{
                if(service_name==sub_doc.data().service_name){
                    let employer_name = doc.data().name;
                    let employer_surname = doc.data().surname;
                    let quality=doc.data().quality;
                    let profile_image=doc.data().profile_image;
                    var newDiv = document.createElement("div");
                    var div_itemleft=document.createElement("div");
                    var div_info=document.createElement("div");
                    var image=document.createElement('img');
                    var p_name=document.createElement('p');
                    var p_wtd=document.createElement('p');
                    var a_infopage=document.createElement('a');
                    var i=document.createElement('i');
                    newDiv.classList.add('emp_item')
                    newDiv.id = doc.id;
                    div_itemleft.classList.add('item_left');
                    image.classList.add('avatar');
                    if(profile_image==null || profile_image==undefined){
                        image.setAttribute('src','/public/img/user.svg');
                    }else{
                        image.setAttribute('src',`${profile_image}`);
                    }
                    div_info.classList.add('info');
                    p_name.classList.add('name');
                    p_wtd.classList.add('wtd');
                    i.setAttribute('class','fa-solid fa-circle-info')
                    a_infopage.href="/infopage";
                    a_infopage.innerHTML=i.outerHTML;
                    p_name.innerHTML=employer_name+" "+employer_surname;
                    p_wtd.innerHTML=quality;
                    div_info.innerHTML=p_name.outerHTML+p_wtd.outerHTML;
                    div_itemleft.innerHTML=image.outerHTML+div_info.outerHTML;
                    newDiv.innerHTML = div_itemleft.outerHTML + a_infopage.outerHTML;
                    employer_div.insertAdjacentElement('beforeend', newDiv);
                    $('.emp_item').click(function(){
                        $('.emp_item').removeClass("emp_item_chosen");
                        var name=$(this).children().children(".info").children(".name");
                        $(this).addClass("emp_item_chosen");
                        var id=$(this).attr('id')
                        $('.btn_next').addClass("btn_next_up");
                        document.cookie = encodeURIComponent('name') + '=' + encodeURIComponent(name.text());
                        sessionStorage.setItem('employer_name',name.text());
                        if(sessionStorage.getItem('fid')==null){
                            sessionStorage.setItem('fid',id);
                        }
                        
                
                        });
                    }
                })
            
    });

}
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
