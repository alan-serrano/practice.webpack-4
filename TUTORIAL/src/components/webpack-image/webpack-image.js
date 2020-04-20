import webpack from '../../img/webpack.png';
import './webpack-image.scss';
class WebpackImage {
    render() {
        const img = document.createElement('img');
        img.src = webpack;
        img.alt = 'Kiwi';
        img.classList.add('kiwi-image');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
    }
}

export default WebpackImage;