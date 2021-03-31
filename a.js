const cookieStorage={
    getItem:(key)=>{
        const cookies=document.cookie
        .split(';')
        .map(cookie=>cookie.split('='))
        .reduce((acc,[key,value]) => ({...acc,[key.trim()]:value}),{});

        return cookies[key]
    },
    setItem:(key,value) => {
        document.cookie=`${key}=${value}`;
    },
};


const storageType=cookieStorage;
// const storageType = window.localStorage;
// const storageType=localstorage;
const consentPropertyName='jdc_consent';

const shouldShowPopUp=()=>!storageType.getItem(consentPropertyName);
const saveIt=()=>storageType.setItem(consentPropertyName,true);

window.onload=()=>{

    const cookieConsent = document.getElementById('cookie-consent');
    const abtn = document.getElementById('Accept');

    const acceptFnkn = event => {
        saveIt(storageType);
        cookieConsent.classList.add('hidden');
    };

    abtn.addEventListener('click',acceptFnkn);

    if(shouldShowPopUp(storageType)) {
        setTimeout(()=> {

            cookieConsent.classList.remove('hidden');

        },2500);
        
    }
}
