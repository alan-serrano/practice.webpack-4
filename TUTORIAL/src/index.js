import HelloWorldButton from './components/hello-world-button/hello-world-button';
import addImage from './add-image';
import Heading from './components/heading/heading';

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();

heading.render();
helloWorldButton.render();
addImage();