/*
React
ReactDOM
*/

// /* Литеральный код */
// const container = document.getElementById('root');
// const reactElement = React.createElement(
//     'h1', 
//     {title:'title', className:'heading'}, 
//     'Hi!');


// /* Так делать тоже не будем... */
// class Heading extends React.Component{
//     render(){
//         const {titleForHeading, children} = this.props;
//         return React.createElement(
//             'h1', 
//             {title:titleForHeading}, 
//             ...children);
//     }
// }

// const reactElement = React.createElement(
//     Heading, 
//     {titleForHeading:'title123'}, 
//     'Elon Musk', 
//     '!!!'
// );
// ReactDOM.render(reactElement, document.getElementById('root'));


class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {counter:0};
    }
    render(){
        //this.props = 12; // props - ТОЛЬКО ДЛЯ ЧТЕНИЯ!
        const {counter} = this.state;
        return React.createElement(
            React.Fragment, 
            null,
            React.createElement('h1', null, counter),
            React.createElement('button', null, '+'),
            React.createElement('button', null, '-')
        )
    }
}

const reactElement = React.createElement(Counter);
ReactDOM.render(reactElement, document.getElementById('root'));