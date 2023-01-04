var current_url=window.location.href;
var splittet_url=current_url.split('/');
var mfid=splittet_url[3];

document.cookie = encodeURIComponent('mfid') + '=' + encodeURIComponent(mfid);


setUrl();
function setUrl(){
    var first_url=document.getElementById('employers_href');
    var second_url=document.getElementById('services_href');
    first_url.setAttribute('href',`/${mfid}/employers`);
    second_url.setAttribute('href',`/${mfid}/services`);
}