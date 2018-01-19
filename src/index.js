const React = require('react')
const { render } = require('react-dom')

class App extends React.Component {
    render() {
        return React.createElement('h1')
    }
}

render(React.createElement(App), document.getElementById('react-practice'))

console.log('HELLO WORLD')
