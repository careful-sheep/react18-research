import lottie from 'lottie-web';
import { useEffect } from 'react';

const SsrForSuspence: React.FC = () => {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById('lottie-animation') as HTMLDivElement,
            renderer: 'svg',
            loop: true,
            path: 'https://gaeacdn.jiliguala.com/jlgl/pages/animation/finger02.json',
            autoplay: true
        });
    }, []);
    return <div id="lottie-animation" style={{ width: '300px', height: '300px' }}></div>;
};
export default SsrForSuspence;
