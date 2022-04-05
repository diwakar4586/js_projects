const countdown = () => {
    const countDate = new Date("April 22,2022 00:00:00").getTime();//will give value in millisecond
    const now = new Date().getTime();
    const gap = countDate-now;
    console.log(gap);

    //how time work
    const second = 1000;
    const minute = second *60;
    const hour = minute*60;
    const day = hour*24;

    // calcultaion
    const textDay = Math.floor(gap/day);
    const textHour = Math.floor((gap%day)/hour);
    const textMinute = Math.floor((gap%hour)/minute);
    const textSecond = Math.floor((gap%minute)/second);
    
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;

    
                                                                               
};

// countdown();//it will run function only once so to run function continuously we can use setInteral

setInterval(countdown,1000);
