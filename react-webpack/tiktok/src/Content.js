//import { useRef, useLayoutEffect, useEffect, useState } from "react";

//useEffect
//1. useEffect(callback)
// - Goi callback moi khi component re-render
// - Goi callback sau khi component them element vao DOM
//2.useEffect(callback, [])
// - Chi goi callback 1 lan sau khi component mount
//3.useEffect(callback, [deps])
// - Callback se duoc goi lai moi khi deps thay doi
//````````````````````````
//1. Callback luon duoc goi sau khi component mounted
//2. Cleanup function luon duoc goi truoc khi component unmount
//3. Cleanup function luon duoc goi truoc khi callback duoc goi

// const tabs = ["posts", "comments", "albums"];

// function Content() {
//   const [title, setTitle] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState("posts");
//   const [showToTop, setShowToTop] = useState(false);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then((res) => res.json())
//       .then((posts) => {
//         setPosts(posts);
//       });
//   }, [type]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= 200) {
//         setShowToTop(true);
//       } else {
//         setShowToTop(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);

//     //Clean up function
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           onClick={() => setType(tab)}
//           style={
//             type === tab
//               ? {
//                   color: "#fff",
//                   background: "#333",
//                 }
//               : {}
//           }
//         >
//           {tab}
//         </button>
//       ))}
//       <input value={title} onChange={(e) => setTitle(e.target.value)} />
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title || post.name}</li>
//         ))}
//       </ul>
//       {showToTop && (
//         <button
//           style={{
//             position: "fixed",
//             right: 20,
//             bottom: 20,
//           }}
//         >
//           Go to top
//         </button>
//       )}
//     </div>
//   );
// }

// export default Content;

//Re-size
// function Content() {
//     const[width, setWidth] = useState(window.innerWidth)

//     useEffect(() => {
//         const handleResize = () => {
//             setWidth(window.innerWidth)
//         }

//         window.addEventListener('resize',handleResize)

//         //Clean up
//         return () => {
//             window.removeEventListener('resize',handleResize )
//         }
//     })
//     return (
//         <div>
//             {width}
//         </div>
//     )
// }

// export default Content

// function Content() {
//   const [avt, setAvt] = useState();

//   useEffect(() => {
//     return () => {
//       avt && URL.revokeObjectURL(avt.preview);
//     };
//   }, [avt]);
//   const handleAvatar = (e) => {
//     const file = e.target.files[0];
//     file.preview = URL.createObjectURL(file);

//     setAvt(file);

//     e.target.value = null
//     console.log(123)
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleAvatar} />
//       {avt && <img src={avt.preview} alt="" width="80%" />}
//     </div>
//   );
// }

// export default Content;

// const lessons = [
//   {
//     id: 1,
//     name: "Esse aliqua irure cupidatat ut elit est ullamco irure pariatur commodo esse.",
//   },
//   {
//     id: 2,
//     name: "Minim sint deserunt commodo labore laborum aliquip cillum laboris minim Lorem pariatur.",
//   },
//   {
//     id: 3,
//     name: "Do eu adipisicing sit esse labore tempor sint laborum et pariatur.",
//   },
// ];

// function Content() {
//   const [lessonId, setLessonId] = useState(1);

//   useEffect(() => {
//     const handleComment = ({ detail }) => {
//       console.log(detail);
//     };

//     window.addEventListener(`lesson-${lessonId}`, handleComment);

//     return () => {
//       window.removeEventListener(`lesson-${lessonId}`, handleComment);
//     };
//   }, [lessonId]);

//   return (
//     <div>
//       <ul>
//         {lessons.map((lesson) => (
//           <li
//             key={lesson.id}
//             style={{
//               color: lessonId === lesson.id ? "red" : "#333",
//             }}
//             onClick={() => setLessonId(lesson.id)}
//           >
//             {lesson.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Content;

//useLayoutEffect
//1. Cap nhap lai state
//2. Cap nhap DOM (mutated)
//3. Goi cleanup neu deps thay doi (sync)
//4. Goi useLayoutEffect callback (sync)
//5. Render lai UI
// function Content() {
//   const [count, setCount] = useState(0);

//   useLayoutEffect(() => {
//     if (count > 3) setCount(0);
//   }, [count]);

//   const handleRun = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleRun}>Run</button>
//     </div>
//   );
// }

// export default Content;

// //useRef
// function Content() {
//   const [count, setCount] = useState(60);

//   const timerId = useRef();
//   const prevCount = useRef();

//   useEffect(() => {
//     prevCount.current = count;
//   }, [count]);

//   const handleStart = () => {
//     timerId.current = setInterval(() => {
//       setCount((prevCount) => prevCount - 1);
//     }, 1000);
//   };
//   const handleStop = () => {
//     clearInterval(timerId.current);
//   };
//   console.log(count, prevCount.current);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   );
// }

// // export default Content;
// import { memo } from "react";
// function Content({onIncrease}){
//   return(
//     <>
//     <h1>hi anh em</h1>
//     <button onClick={onIncrease}>Click me!</button>
//     </>
//   )
// }

// export default memo(Content)
import Pragraph from "./Paragraph";

export default function Content() {
  return (
    <div>
      <Pragraph />
    </div>
  );
}
