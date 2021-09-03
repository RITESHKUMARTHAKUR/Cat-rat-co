let button = document.querySelector('.searchbtn')
let inputvalue = document.querySelector('.inpvalue')
let city = document.querySelector('.cityname')
let tempn = document.querySelector('.temper')
let dis = document.querySelector('.des')
let s = document.querySelector('.srchdata')


var counter =1 ;
    setInterval( function() {
        document.getElementById('radio' + counter ).checked= true;
        counter ++ ;
        if(counter > 4 ){
            counter=1;
        }
    }, 5000);

function show(){
    let s = document.querySelector('.srchdata')
    s.style.display = "block";

}

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=9d4cdd0a5c83705b14a6db448a32b9e2')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let nameval = data['name'];
        let tempval = data['main']['temp'];
        let descval = data['weather'][0]['description']

        city.innerHTML = nameval ;
        tempn.innerHTML = tempval ;
        dis.innerHTML = descval ;

    })

.catch(err => alert("Wrong city name! ") )
});