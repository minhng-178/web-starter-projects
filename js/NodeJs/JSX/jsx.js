// ButtonComponent.js
const ButtonComponent = ({ title, href, onClick, className }) => {
    let Type = 'button'
    const props = {
    }

    if (href) {
        Type = 'a';
        props.href = href;
    }
    if (onClick) {
        props.onClick = onClick;
    }
    return (
        <Type {...props} className={className}>{title}</Type>
    );
}

// App.js
function App() {
    return (
        <React.Fragment>
            <ButtonComponent
                title='Click Me!'
                href='https://fullstack.edu.vn'
                onClick={() => console.log('clicked!')}
                className='btn'
            />
        </React.Fragment>
    );
}

// Index.js
const root = document.getElementById('root');
ReactDOM.render(<App />, root);