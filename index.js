const XboxController = require('xbox-controller');
const xbox = new XboxController();

console.log('Xbox Controller Demo Started');
console.log('Press any button or move any stick...');

xbox.on('a:press', () => console.log('A button pressed'));
xbox.on('b:press', () => console.log('B button pressed'));
xbox.on('x:press', () => console.log('X button pressed'));
xbox.on('y:press', () => console.log('Y button pressed'));
xbox.on('lefttrigger', (value) => console.log('Left trigger:', value));
xbox.on('righttrigger', (value) => console.log('Right trigger:', value));
xbox.on('left:move', (position) => console.log('Left stick:', position));
xbox.on('right:move', (position) => console.log('Right stick:', position));
xbox.on('start:press', () => console.log('Start button pressed'));
xbox.on('back:press', () => console.log('Back button pressed'));

xbox.on('error', (err) => console.error('Controller error:', err));
