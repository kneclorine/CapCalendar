import {INTERVAL} from './Config.js';
import pubSub from './PubSub.js';
import {timerInterface} from './TimerInterface.js';
import {CHANNELS} from './Config.js';

class TimerService{
    constructor(pubSub, timerInterface){
        this._pubSub = pubSub;
        this._timerInterface = timerInterface;
        this._intervalId = this._timerInterface.setInterval(()=> {
            const date = new Date();
            this._pubSub.emit(CHANNELS.CHANGEDATE, date);
        },INTERVAL);
    }
    dispose(){
        this._timerInterface.clearInterval(this._intervalId);
    }
}

export default new TimerService(pubSub, timerInterface);