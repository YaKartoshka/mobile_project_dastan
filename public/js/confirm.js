var mfid=getCookie('mfid');

setUrl();

function setUrl(){
    var first_url=document.getElementById('appointment');
    var first_action=document.getElementById('confirmed');
    first_url.setAttribute('href',`/${mfid}/appointment`);
    first_action.setAttribute('action',`/${mfid}/confirmed`);
}
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  