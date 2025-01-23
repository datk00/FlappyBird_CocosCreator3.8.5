import { _decorator, Component, Node, Animation, RigidBody2D, Quat, Vec3, tween, CCFloat, Collider2D, Contact2DType, IPhysics2DContact, director, find, Game } from 'cc';
import { audioCtrl } from './audioCtrl';
const { ccclass, property } = _decorator;


@ccclass('Bird')
export class Bird extends Component {


    @property({
        type: Number,
        tooltip: 'Con chim có thể bay cao như nào?',
        range: [0, 100],
        step: 1,
    })
    public highFly: number = 30
    
    @property({
        type: CCFloat,
        tooltip: 'Con chim có thể bay cao trong bao lâu (tính bằng giây)?',
        range: [0, 3],
    })
    public timeFly: number = 0.3
    
    @property({
        type: audioCtrl,
    })
    public audioBird:audioCtrl = null 


    public isOver: boolean = false
 
    fly() {
        this.audioBird.playFlyAudio()
        let pos = this.node.position
        tween(this.node.position)
        .to(this.timeFly, new Vec3(pos.x, pos.y + this.highFly, 0), {
                easing: 'smooth',
                onUpdate: (target: Vec3, radio: number) => {
                    this.node.position = target
                    this.node.setRotationFromEuler(new Vec3(0, 0, 34));
                },
                onComplete: () => {
                    this.node.setRotationFromEuler(new Vec3(0, 0, -10));
                }   
            }).start()
    }
    resetBird() {
        this.removeGravity()
        this.node.setPosition(new Vec3(0, 20, 0))
    }
    applyGravity() {
        this.getComponent(RigidBody2D).enabled = true
        // this.node.setRotationFromEuler(new Vec3(0, 0, -34));
    }
    removeGravity() {
        this.getComponent(RigidBody2D).enabled = false
        
    }
    start() {
        
        
        const ani = this.getComponent(Animation)
        console.log(ani);
        ani.play('bird')

        this.removeGravity()
    }

  

    update(deltaTime: number) {
        
    }
}


