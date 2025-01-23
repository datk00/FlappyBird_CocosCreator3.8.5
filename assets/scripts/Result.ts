import { _decorator, AudioSource, Component, Label, Node } from 'cc';
import { audioCtrl } from './audioCtrl';
const { ccclass, property } = _decorator;

@ccclass('Result')
export class Result extends Component {

    @property({
        type: Label,
    })
    public currentScoreLabel: Label;

    @property({
        type: Label,
    })
    public topScoreLabel: Label;

    @property({
        type: Label,
    })
    public playAgainLabel: Label;

    @property(Node)
    public audioCtrl: Node;

    maxScore: number = 0;
    currentScore: number = 0;
    isStartGame: boolean = false;

    updateScore(num: number) {
        this.currentScore = num;
        this.currentScoreLabel.string = '' + this.currentScore
    }

    resetScore(){ 
        this.updateScore(0)
    }

    public audioCPN: audioCtrl = null;
    start() {
        this.audioCPN = this.audioCtrl.getComponent(audioCtrl)
    }
    plusScore() {
        this.audioCPN.playPointAudio()        
        this.isStartGame && this.updateScore(this.currentScore + 1)
    }
    showResult(){
        this.maxScore = Math.max(this.maxScore, this.currentScore)
        this.topScoreLabel.string = 'High Score: ' + this.maxScore

        this.topScoreLabel.node.active = true;
        this.playAgainLabel.node.active = true;
    }
    hideResult() {
        this.topScoreLabel.node.active = false
        this.playAgainLabel.node.active = false
    }

    flow_result_start() {
        this.isStartGame = true
        this.hideResult()
    }
    flow_result_end() {
        this.isStartGame = false
        this.showResult()
    }

}


