import './hello-world-button.scss';

class HelloWorldButton {
    buttonCssClass = 'hello-world-button';

    render() {
        const button = document.createElement('button');
        const body = document.body;

        button.innerHTML = 'Hello world';
        button.classList.add(this.buttonCssClass);
        button.onclick = function onClick() {
            const p = document.createElement('p');
            p.classList.add('hello-world-text');
            p.innerHTML = 'Hello world';
            body.appendChild(p);
        }
        body.appendChild(button);
    }
}

export default HelloWorldButton;