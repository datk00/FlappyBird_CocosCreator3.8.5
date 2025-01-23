import { _decorator, AudioClip, AudioSource, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('audioCtrl')
export class audioCtrl extends Component {



    @property(AudioSource)
    public audioSource: AudioSource;
    @property([AudioClip])
    public clip: AudioClip[] = [];

    start() {
        console.log(this.audioSource);
        
        // this.playOneShot()
    }
    playFlyAudio () {
        this.audioSource.playOneShot(this.clip[0], 1)
    }
    playHitAudio () {
        this.audioSource.playOneShot(this.clip[1], 1)
    }
    playPointAudio () {
        this.audioSource.playOneShot(this.clip[3], 1)
    }
    update(deltaTime: number) {
        
    }
}


