const circle = document.getElementById('circle');
const observer = new IntersectionObserver((items) => {
    
    const trackingInfo = items[0];
    if(trackingInfo?.isIntersecting){
        console.log("Items is visible");
    }else{
        console.log("Items is not visible");
    }
});

observer.observe(circle)