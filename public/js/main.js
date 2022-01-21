
const submitBtn=document.getElementById('submitBtn');
const result=document.getElementById('result');
const cityname=document.getElementById('cityname');
const city=document.getElementById('city');
const temp=document.getElementById('temp');
const status1=document.getElementById('status1');
const getInfo = async(event)=>{
    //event.preventDefault;
    let cityval=cityname.value;
    if(cityval==""){
        result.innerHTML="Please write any city";
    }
    else{
        try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=matric&appid=489ce486a4d3dbd091cdcaa50b197a8f`;
        const response= await fetch(url);
        const data=await response.json();
        const a=[data];
        city.innerHTML=`${a[0].name} ${a[0].sys.country}`;
        temp.innerHTML=a[0].main.temp;
        status1.innerHTML=a[0].weather[0].main;
        }
        catch{
            result.innerHTML="Please write any city";
        }
    }
}

submitBtn.addEventListener('click',getInfo);