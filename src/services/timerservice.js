import {INTERVAL} from './config.js';
import pubSub from './pubsub.js';
import {timerInterface} from './timerinterface.js';
import {CHANNELS} from './config.js';

class TimerService{
    constructor(pubSub, timerInterface){
        this._pubSub = pubSub;
        this._timerInterface = timerInterface;
        this._intervalId = this._timerInterface.setInterval(()=> {
            const date = new Date();
            this._pubSub.emit(CHANNELS.CHANGEDATE, date);
        },INTERVAL);
    }
    init(){
        this._intervalId = this._timerInterface.setInterval(()=>{
            const date = new Date();
            this._pubSub.emit(CHANNELS.CHANGEDATE, date);
        }, INTERVAL);
    }
    dispose(){
        this._timerInterface.clearInterval(this._intervalId);
    }
}
export default new TimerService(pubSub, timerInterface);
