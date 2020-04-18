import wp from './img/webpack.png';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'webpack';
    img.width = 300;
    img.src = wp;

    document.body.appendChild(img);
}

export default addImage;