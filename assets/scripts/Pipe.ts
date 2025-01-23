import { _decorator, AudioSource, Component, director, Node, UITransform, Vec3 } from 'cc';
import { Bird } from './Bird';
import { Result } from './Result';
import { audioCtrl } from './audioCtrl';

const { ccclass, property } = _decorator;

const random = (min, max) => {
    return Math.random() * (max - min) + min;
}

@ccclass('Pipe')
export class Pipe extends Component {
    @property({
        type: Number,
        tooltip: "speed of the pipe",
        min: 0,
        max: 200,
        step: 10,
    })
    public speedPipe: number = 80

    @property({
        type: Node,
        tooltip: "top pipe here"
    })
    public topPipe: Node = null;
    @property({
        type: Node,
        tooltip: "buttom pipe here"
    })
    public buttomPipe: Node = null;



    distanceBetweenOfTwoPipes = {
        min: 100,
        max: 200
    }

    maxPosY_buttomPipe = {
        min: -137,
        max: 31,
    }

    start() {
        this.createPipes()

        

        
    }

    createPipes() {
        
        // let topPipePosY = random(this.maxPosY_topPipe.min, this.maxPosY_topPipe.max)
        let posYbuttomPipe = random(this.maxPosY_buttomPipe.min, this.maxPosY_buttomPipe.max)
        let distance = random(this.distanceBetweenOfTwoPipes.min, this.distanceBetweenOfTwoPipes.max)
        let posYTopPipe = posYbuttomPipe + distance

        console.log(posYbuttomPipe);
        

        this.topPipe.position = new Vec3(0, posYTopPipe, 0)
        this.buttomPipe.position = new Vec3(0, posYbuttomPipe, 0)

        this.node.position = new Vec3(250, 0, 0)
    }

    remove_node() {
        this.node.active = false
        this.node.destroy()
        console.log('Đã xóa pipe ở pipes');
        
    }
    private oneUpdate: boolean = false
    update(deltaTime: number) {
        let pos = this.node.getPosition()
        pos.x -= this.speedPipe * deltaTime 
        this.node.setPosition(pos)
           
        if (pos.x < -206) {
            this.remove_node()
        }
        if (pos.x < -30 && !this.oneUpdate) {
            let result = this.node.parent.parent.getChildByName('Result').getComponent(Result)
            result.plusScore()
            this.oneUpdate = true
        }
        
    }
}


