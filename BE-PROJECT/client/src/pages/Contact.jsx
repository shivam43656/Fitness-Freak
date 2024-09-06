
// // import axios from "axios";
// // import React, { useState } from "react";
// // import { ClipLoader } from "react-spinners";
// // import { toast } from "react-toastify";

// // const Contact = () => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const sendMail = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     try {
// //       const { data } = await axios.post(
// //         "http://localhost:4000/send/mail",
// //         {
// //           name,
// //           email,
// //           message,
// //         },
// //         {
// //           withCredentials: true,
// //           headers: { "Content-Type": "application/json" },
// //         }
// //       );
// //       setName("");
// //       setEmail("");
// //       setMessage("");
// //       toast.success(data.message);
// //       setLoading(false);
// //     } catch (error) {
// //       setLoading(false);
// //       toast.error(error.response.data.message);
// //     }
// //   };

// //   return (
// //     <section className="contact">
// //       <form onSubmit={sendMail}>
// //         <h1>CONTACT US</h1>
// //         <div>
// //           <label>Name</label>
// //           <input
// //             type="text"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //           />
// //         </div>
// //         <div>
// //           <label>Email</label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //         </div>
// //         <div>
// //           <label>Message</label>
// //           <input
// //             type="text"
// //             value={message}
// //             onChange={(e) => setMessage(e.target.value)}
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           disabled={loading}
// //           style={{
// //             display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center",
// //             gap: "15px",
// //           }}
// //         >
// //           {loading && <ClipLoader size={20} color="white" />}
// //           Send Message
// //         </button>
// //       </form>
// //     </section>
// //   );
// // };

// // export default Contact;


// import axios from "axios";
// import React, { useState } from "react";
// import { ClipLoader } from "react-spinners";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const sendMail = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const { data } = await axios.post(
//         "localhost:3000/contacts",
//         {
//           name,
//           email,
//           message,
//         },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );
//       setName("");
//       setEmail("");
//       setMessage("");
//       toast.success(data.message);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       toast.error(error.response?.data?.message || "An unexpected error occurred.");
//     }
//   };

//   return (
//     <section className="contact bg-gray-100 py-16 px-4 min-h-screen">
//       <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//         <form onSubmit={sendMail} className="space-y-6">
//           <h1 className="text-2xl font-bold text-center mb-6">CONTACT US</h1>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Message</label>
//             <textarea
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               rows="4"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full flex items-center justify-center bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading ? 'opacity-50' : ''}`}
//           >
//             {loading && <ClipLoader size={20} color="white" className="mr-2" />}
//             Send Message
//           </button>
//         </form>
//       </div>
//       <ToastContainer />
//     </section>
//   );
// };

// export default Contact;

// import axios from "axios";
// import React, { useState } from "react";
// import { ClipLoader } from "react-spinners";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const sendMail = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const { data } = await axios.post(
//         "http://localhost:8080/contacts",  // Corrected URL
//         { name, email, message },
//         { withCredentials: true, headers: { "Content-Type": "application/json" } }
//       );
//       setName("");
//       setEmail("");
//       setMessage("");
//       toast.success(data.message);
//     } catch (error) {
//         console.error('Error:', error);  // Log the entire error object for debugging
//         toast.error(
//           error.response?.data?.message ||
//           error.message ||
//           "An unexpected error occurred."
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//   return (
//     <section className="contact bg-gray-100 py-16 px-4 min-h-screen">
//       <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//         <form onSubmit={sendMail} className="space-y-6">
//           <h1 className="text-2xl font-bold text-center mb-6">CONTACT US</h1>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Message</label>
//             <textarea
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               rows="4"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full flex items-center justify-center bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading ? 'opacity-50' : ''}`}
//           >
//             {loading && <ClipLoader size={20} color="white" className="mr-2" />}
//             Send Message
//           </button>
//         </form>
//       </div>
//       <ToastContainer />
//     </section>
//   );
// };

// export default Contact;


import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/Navbar";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:8080/contacts",
        { name, email, message },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      setName("");
      setEmail("");
      setMessage("");
      toast.success(data.message);
    } catch (error) {
        console.error('Error:', error);  // Log the entire error object for debugging
        toast.error(
          error.response?.data?.message ||
          error.message ||
          "An unexpected error occurred."
        );
      } finally {
        setLoading(false);
      }
    };

    return (
      <section className="contact bg-gray-100 min-h-screen">
        <Navbar />
        <div className="max-w-md mx-auto my-16 bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={sendMail} className="space-y-6">
            <h1 className="text-2xl font-bold text-center mb-6">CONTACT US</h1>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                loading ? "opacity-50" : ""
              }`}
            >
              {loading && <ClipLoader size={20} color="white" className="mr-2" />}
              Send Message
            </button>
          </form>
        </div>
        <ToastContainer />
      </section>
    );
  };
  
  export default Contact;