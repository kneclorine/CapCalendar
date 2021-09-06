import {INTERVAL} from './Config.js';
import {PubSub} from './PubSub.js';
import {timerInterface} from './TimerInterface.js';

class TimerService{

    constructor(pubSub, timerInterface){
        this._pubSub = pubSub;
        this._timerInterface = timerInterface;

        //TODO: Me subscribo a setInterval y cada intervalo de tiempo controlado 
        //por el pubsub mando una nueva fecha
    }
}

export default new TimerService(new PubSub(), timerInterface);