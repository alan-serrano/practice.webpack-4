import './heading.scss';

class Heading {
    render(pageName) {
        const h1 = document.createElement('h1');
        const body = document.body;
        h1.innerHTML = `Webpack is awesome. This is "${pageName}" page`;
        body.appendChild(h1);
    }
}

export default Heading;