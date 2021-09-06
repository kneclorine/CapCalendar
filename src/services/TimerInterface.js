export const timerInterface = {
    setInterval:(handler, interval)=>{
        this.setInterval(handler, interval).bind(window.setInterval(handler, interval));
    }, 
    clearInterval:(intervalId)=>{
        this.clearInterval(intervalId).bind(window.clearInterval(intervalId));
    }
}