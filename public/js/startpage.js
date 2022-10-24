var current_url=window.location.href;
var splittet_url=current_url.split('/');
var fid=splittet_url[3];
document.cookie = encodeURIComponent('fid') + '=' + encodeURIComponent(fid);
setUrl();
function setUrl(){
    var first_url=document.getElementById('employers_href');
    var second_url=document.getElementById('services_href');
    first_url.setAttribute('href',`/${fid}/employers`);
    second_url.setAttribute('action',`/${fid}/services`);
}