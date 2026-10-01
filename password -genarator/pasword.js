function getpasword()
{
    let chars='QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfhjklzxcvbnm1234567890!@$%^&*()_+{}|:,.?'
    let passLength=8;
    let pasword='';
    for(let i=0; i<passLength; i++)
    {
        let randNum =Math.floor(Math.random()*chars.length);
        pasword +=chars.substring(randNum,randNum+1);
    }
    document.querySelector('#pasword').value =pasword;
}