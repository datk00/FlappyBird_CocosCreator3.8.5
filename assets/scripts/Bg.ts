import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
import { GameCtrl } from './GameCtrl';

@ccclass('Bg')
export class Bg extends Component {
    @property({
        type: Node,
    })
    public bg1
    
    @property({
        type: Node,
    })
    public bg2

    @property({
        type: Node,
    })
    public bg3
    @property({
        type: GameCtrl,
        tooltip: 'GameCtrl'
    })
    public GameCtrl


    speedbg: number
    bg1PosX: number
    bg2PosX: number
    bg3PosX: number
    start() {
        this.speedbg = this.GameCtrl.speedbg
        
        this.bg1PosX = this.bg1.getPosition().x
        this.bg2PosX = this.bg2.getPosition().x
        this.bg3PosX = this.bg3.getPosition().x
        
        


    }

    update(deltaTime: number) {
        for (let item of [this.bg1, this.bg2, this.bg3]) {
            let pos = item.getPosition()
            pos.x -= this.speedbg * deltaTime
            item.setPosition(pos)

            if (pos.x <= -this.bg2PosX) {
                item.setPosition(new Vec3(this.bg3PosX, 0, 0))
            }

        } 
    }


}


