// import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can add the code to send the form data to your backend or handle it as needed
//     console.log(formData);
//     // Reset the form after submission
//     setFormData({ name: "", email: "", subject: "", message: "" });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
//       <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-semibold mb-1">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-semibold mb-1">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="subject" className="block text-sm font-semibold mb-1">
//             Subject
//           </label>
//           <input
//             type="text"
//             id="subject"
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="message" className="block text-sm font-semibold mb-1">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
//             rows="5"
//             required
//           ></textarea>
//         </div>
//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
//           >
//             Send Message
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Contact;
