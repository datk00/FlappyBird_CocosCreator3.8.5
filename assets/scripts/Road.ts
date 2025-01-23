import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
import { GameCtrl } from './GameCtrl';

@ccclass('Road')
export class Road extends Component {
    @property({
        type: Node,
        tooltip: 'Road 1'
    })
    public road1
    
    @property({
        type: Node,
        tooltip: 'Road 2'
    })
    public road2

    @property({
        type: Node,
        tooltip: 'Road 3'
    })
    public road3
    @property({
        type: GameCtrl,
        tooltip: 'GameCtrl'
    })
    public GameCtrl


    speedRoad: number
    road1PosX: number
    road2PosX: number
    road3PosX: number
    start() {
        this.speedRoad = this.GameCtrl.speedRoad
        
        this.road1PosX = this.road1.getPosition().x
        this.road2PosX = this.road2.getPosition().x
        this.road3PosX = this.road3.getPosition().x
        
        


    }

    update(deltaTime: number) {
        for (let item of [this.road1, this.road2, this.road3]) {
            let pos = item.getPosition()
            pos.x -= this.speedRoad * deltaTime
            item.setPosition(pos)

            if (pos.x <= -this.road2PosX) {
                item.setPosition(new Vec3(this.road3PosX, 0, 0))
            }

        } 
    }


}


