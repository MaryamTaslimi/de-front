import '@lottiefiles/lottie-player';
import {create} from '@lottiefiles/lottie-interactivity';
import {useEffect, useRef} from "react";

export default function Hero2() {
    const ref = useRef();
    useEffect(() => {
        // 3. listen for player load. see lottie player repo for other events
        this.ref.current.addEventListener('load', function (e) {
            // 4. configure the interactivity library
            create({
                mode: 'scroll',
                player: '#firstLottie',
                actions: [
                    {
                        visibility: [0, 1],
                        type: 'seek',
                        frames: [0, 100],
                    },
                ],
            });
        });
    }, []);

    return (
        <div className = "App">
            <div style = {{height: '400px'}}/>
            <lottie-player
                ref = {this.ref} // 2. set the reference for the player
                id = "firstLottie"
                controls
                mode = "normal"
                src = "https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
                style = {{width: '320px'}}
            />
        </div>
    );
}

