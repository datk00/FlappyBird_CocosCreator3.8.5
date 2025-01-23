import { _decorator, Component, Node, input, Input, EventKeyboard, KeyCode, Prefab, instantiate, UITransform, director, Collider2D, Contact2DType, IPhysics2DContact } from 'cc';
import { Result } from './Result';
import { Bird } from './Bird';
const { ccclass, property } = _decorator;


@ccclass('GameCtrl')
export class GameCtrl extends Component {

    isOver: boolean = false;
    isStart: boolean = false;
    @property({
        type: Number,
        tooltip: 'speed of road',
        min: 50,
        max: 550,
        step: 5,
    })
    public speedRoad:number = 50
    @property({
        type: Number,
        tooltip: 'speed of background',
        min: 0,
        max: 550,
        step: 5,
    })
    public speedbg:number = 20


    @property({
        type: Result,
        tooltip: 'Result component',
    })
    public result: Result

    @property({
        type: Bird,
        tooltip: 'Bird component',
    })
    public bird: Bird
    @property({
        type: Prefab,
        tooltip: 'Prefab of pipes',
    })
    public pipePrefab: Prefab = null

  
    eventListeners() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this)
    }
    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_S:
                break;
                case KeyCode.SPACE:
                this.startGame()
                // this.result.plusScore()
                this.bird.fly()
                break;
                
            case KeyCode.KEY_P:
                this.endGame()
                break;
            default:
                break;
        }
    }

    startGame() {

        this.isStart = true
        if (this.isOver) {
            this.clearPipes()
            this.bird.resetBird()
            this.result.resetScore()
        }
       
        this.result.flow_result_start()
        director.resume()
        this.bird.applyGravity()



        // va chạm chim    
        let collider = this.bird.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        this.isOver = false


    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        console.log('chim có va chạm');
        this.bird.audioBird.playHitAudio()
        this.endGame()
    }
    endGame() {
        this.result.flow_result_end()
        this.bird.resetBird()
        director.pause()
        this.isOver = true
        this.isStart = false
    }

    private pipes: Node[] = [];
    throw_pipes() {
        let pipes = instantiate(this.pipePrefab);
        let _canvas = this.node.scene.getChildByName('Canvas');
        let container_prelab = _canvas.getChildByName('container_Prelab_Pipes')
        
        pipes.parent = container_prelab 
        pipes.setPosition(this.node.position)
        this.pipes.push(pipes);
    }
    clearPipes() {
        for (let pipe of this.pipes) {
            pipe.destroy(); 
        }
        this.pipes = [];  
    }
    start() {
        this.eventListeners()
        this.schedule(() => {
            if (this.isStart) {
                this.throw_pipes()
            }
        }, 3)
        // this.throw_pipes()
        
    }

    update(deltaTime: number) {
        
    }
}


