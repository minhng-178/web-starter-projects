//userState

// function App() {

//   const [job, setJob] = useState("");
//   const [jobs, setJobs] = useState(() => {
//     const storageJobs = JSON.parse(localStorage.getItem("jobs"));
//     console.log(storageJobs);
//     return storageJobs
//   });

//   const handleSubmit = () => {
//     setJobs((prev) => {
//       const newJobs = [...prev, job];

//       const jsonJobs = JSON.stringify(newJobs);

//       localStorage.setItem("jobs", jsonJobs);
//       return newJobs;
//     });
//     setJob("");
//   };
//   return (
//     <div className="App" style={{ padding: 32 }}>
//       <input value={job} onChange={(e) => setJob(e.target.value)} />
//       <button onClick={handleSubmit}>Add</button>

//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>{job}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//useEffect
// function App() {
//   const [show, setShow] = useState(false)
//   return (
//     <div className="App" style={{ padding: 20 }}>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Content />}
//     </div>
//   );
// }

// export default App;

//1. memo() -> Higher Order
//2. useCallback()

//Hooks
//HOC
//Render props

// function App() {
//   const [count, setCount] = useState(0);

//   const handleIncrease = useCallback(() => {
//     setCount((prevCount) => prevCount + 1);
//   }, []);

//   return (
//     <div style={{ padding: "10px 32px" }}>
//       <Content onIncrease={handleIncrease} />
//       <h1>{count}</h1>
//     </div>
//   );
// }

// export default App;

//useMemo

// import { useState, useMemo, useRef } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [products, setProdcuts] = useState([]);

//   const nameRef = useRef()

//   const handleSubmit = () => {
//     setProdcuts([
//       ...products,
//       {
//         name,
//         price: +price,
//       },
//     ])
//     setName('')
//     setPrice('')

//     nameRef.current.focus()
//   };

//   const total = useMemo(() => {
//     const result = products.reduce((result, prod) =>
//           result + prod.price, 0);
//     return result;
//   }, [products]);
//   return (
//     <div style={{ padding: "10px 32px" }}>
//       <input
//         ref={nameRef}
//         value={name}
//         placeholder="Enter name..."
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br />
//       <input
//         value={price}
//         placeholder="Enter price..."
//         onChange={(e) => setPrice(e.target.value)}
//       />
//       <br />
//       <button onClick={handleSubmit}>Add</button>
//       <br />
//       Total : {total}
//       <ul>
//         {products.map((product, index) => (
//           <li key={index}>
//             {product.name} - {product.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

//useReducer
//1. Init state: 0
//2. Action: Up (state + 1)/ Down (state -1)
//3. Reducer
//4. Dispatch

// import { useState, useReducer } from "react";

// //Init state
// const innitState = 0;

// //Actions
// const UP_ACTION = "up";
// const DOWN_ACTION = "down";

// //Reducer
// const reducer = (state, action) => {
//   switch (action) {
//     case UP_ACTION:
//       return state + 1;
//     case DOWN_ACTION:
//       return state - 1;
//     default:
//       throw new Error("Invalid action");
//   }
// };
// export default function App() {
//   const [count, dispatch] = useReducer(reducer, innitState);

//   return (
//     <div className="App" style={{ padding: "0px 20px" }}>
//       <h1>{count}</h1>
//       <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
//       <button onClick={() => dispatch(UP_ACTION)}>Up</button>
//     </div>
//   );
// }
// import TodoApp from './Todo'

// export default function App () {
//   return <TodoApp />
// }
// import Content from "./Content";
// import { useContext } from "react";
// import "./App.css";
// import { ThemeContext } from "./ThemeContext";
// export default function App() {
//   const context = useContext(ThemeContext);
//   return (
//     <div style={{ padding: 20 }}>
//       <button onClick={context.toggleTheme}>Toggle theme</button>
//       <Content />
//     </div>
//   );
// }
//Context + useReducer
// import { useStore,actions } from "./store";
// export default function App() {
//   const [state, dispatch] = useStore();
//   const {todos, todoInput} = state

//   const handleAdd = () => {
//     dispatch(actions.addToDoInput(todoInput))
//   }

//   return (
//     <div style={{padding: '20px'}}>
//       <input
//         value={todoInput}
//         placeholder="Enter todo..."
//         onChange={ e=> {
//           dispatch(actions.setToDoInput(e.target.value))
//         }}
//       />
//       <button onClick={handleAdd}>Add</button>
//       {todos.map((todo,index) => (
//         <li key={index}>{todo}</li>
//       ))}
//     </div>
//   );
// }

// import {  useImperativeHandle, useRef } from "react";
// import Video from "./Video";
// function App() {
//   const videoRef = useRef();

//   const handlePlay = () => {
//     videoRef.current.play();
//   };

//   const handlePause = () => {
//     videoRef.current.pause();
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <Video ref={videoRef} />
//       <button onClick={handlePlay}>Play</button>
//       <button onClick={handlePause}>Stop</button>
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import Heading from "./Heading";
// import Paragraph from "./Paragraph";

// export default function App() {
//   return (
//     <div style={{ padding: "0 32px" }}>
//       <Heading />
//       <Paragraph />
//     </div>
//   );
// }
// import Button from "./component/Button/index";
// import GlobalStyles from "./component/GlobalStyles";

// export default function App() {
//   return (
//     <GlobalStyles>
//       <div style={{padding: '10px 32px'}}>
//         <Button></Button>
//         <Button primary></Button>
//         <Button primary disabled></Button>
//       </div>
//     </GlobalStyles>
//   );
// }
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}
