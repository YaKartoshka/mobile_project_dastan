var fid=getCookie('fid');

setUrl();

function setUrl(){
    var first_url=document.getElementById('appointment');
    var first_action=document.getElementById('confirmed');
    first_url.setAttribute('href',`/${fid}/appointment`);
    first_action.setAttribute('action',`/${fid}/confirmed`);
}
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  