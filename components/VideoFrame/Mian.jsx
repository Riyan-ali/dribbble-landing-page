import {useRef } from "react";
import styles from "./main.module.css";

const VideoFrame = () => {
    const videoRef = useRef(null);

    return (
        <div className={styles.wrapper}>
            <div className={styles.frame}>
                <video
                    ref={videoRef}
                    src="/videos/video.mp4"
                    autoPlay
                    muted
                    loop
                />
            </div>
        </div>
    );
};

export default VideoFrame;
