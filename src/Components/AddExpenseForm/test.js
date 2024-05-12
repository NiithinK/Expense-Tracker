// // import React, { useState } from 'react';

// // const AddExpenseForm = ({ addExpense }) => {
// //   const [title, setTitle] = useState('');
// //   const [amount, setAmount] = useState('');
// //   const [date, setDate] = useState('');
// //   const [category,setCategory]=useState('');
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Validation
// //     if (!title || !amount || !date|| !category) return;
// //     // Add expense
// //     addExpense({ title, amount, date });
// //     // Clear form fields
// //     setTitle('');
// //     setAmount('');
// //     setDate('');
// //     setCategory('');
// //   };

// //   return (
// //     <form >
// //       <input
// //         type="text"
// //         placeholder="Title"
// //         value={title}
// //         onChange={(e) => setTitle(e.target.value)}
// //       />
// //       <input
// //         type="number"
// //         placeholder="Amount"
// //         value={amount}
// //         onChange={(e) => setAmount(e.target.value)}
// //       />
// //        <select value={category} onChange={(e) => setCategory(e.target.value)}>
// //                 <option value="">Select Category</option>
// //                 <option value="Food">Food</option>
// //                 <option value="Transportation">Transportation</option>
// //                 <option value="Utilities">Utilities</option>
// //                 {/* Add more categories as needed */}
// //               </select>
// //       <input
// //         type="date"
// //         placeholder="Date"
// //         value={date}
// //         onChange={(e) => setDate(e.target.value)}
// //       />
// //       <button type="submit" onSubmit={handleSubmit}>Add Expense</button>
// //     </form>
// //   );
// // };

// // export default AddExpenseForm;



// import React, { useState } from 'react';
// import './AddExpenseForm.css';

// export default function AddWallet({addExpense}){
//     const [balance, setBalance] = useState(5000);
//     const [showPopup, setShowPopup] = useState(false);
   
//     const [title, setTitle] = useState('');
//     const [amount, setAmount] = useState('');
//     const [date, setDate] = useState('');
//     const handleAddIncome = () => {
//       setShowPopup(true);
//     };
  
//     const handleCancel = () => {
//       setShowPopup(false);
//       setTitle('');
//       setAmount('');
//       setDate('');
//     };
  
//     const handleSubmit = (e) => {
      
//       setShowPopup(false);
//       e.preventDefault();
//       // Validation
//       if (!title || !amount || !date) return;
//       // Add expense
//       addExpense({ title, amount, date });
//       // Clear form fields
//       setTitle('');
//       setAmount('');
//       setDate('');
//     };
  
//     return (
//       <div className='expense'>
//           <div className='wallet'>
//           <p>Wallet Balance: ${balance}</p></div>
//         <div className='balanceButton'>
//            <button onClick={handleAddIncome}>+ Add Income</button>
//         </div>
//         {showPopup && (
//           <div className="popup-container">
//             <div className="popup">
//                <div> <h2>Add to Balance</h2></div>
//                 <div className='popupContainer1'>
                     
//                   <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <input
//         type="date"
//         placeholder="Date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//       />
      
//                         <div className='popup-buttons2'>
//                         <button type="submit" onSubmit={handleSubmit}>Add Expense</button>
//                         <button className='popup-buttons2' onClick={handleCancel}>Cancel</button>
//                   </div>
//                </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//     }
    
   
    


// <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <select value={category} onChange={(e) => setCategory(e.target.value)}>
//                 <option value="">Select Category</option>
//                 <option value="Food">Food</option>
//                 <option value="Transportation">Transportation</option>
//                 <option value="Entertinment">Utilities</option>
                
//               </select>
//       <input
//         type="date"
//         placeholder="Date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//       />
//       <div className='popup-buttons2'>
//         <button type="submit" >Add Expense</button>
//         <button className='popup-buttons2' onClick={handleCancel}>Cancel</button>
//       </div>
//     </form> 








// <div className="expense-card">
      
//       <div>
//          <button onClick={() => setShowForm(true)}>Add Expense</button>
//       </div>
      
//       {showForm && (
//            <div className='container-popup'>
//            <div className='pop'>
//            <form onSubmit={handleSubmit} className=".expense-form">
//                  <input
//                    type="text"
//                    placeholder="Title"
//                    value={title}
//                    onChange={(e) => setTitle(e.target.value)}
//                  />
//                  <input
//                    type="number"
//                    placeholder="Amount"
//                    value={amount}
//                    onChange={(e) => setAmount(e.target.value)}
//                  />
//                  <select value={category} onChange={(e) => setCategory(e.target.value)}>
//                    <option value="">Select Category</option>
//                    <option value="Food">Food</option>
//                    <option value="Transportation">Transportation</option>
//                    <option value="Entertainment">Entertainment</option>
//                  </select>
//                  <input
//                    type="date"
//                    placeholder="Date"
//                    value={date}
//                    onChange={(e) => setDate(e.target.value)}
//                  />
//                  <div className="popup-buttons2">
//                    <button type="submit">Add Expense</button>
//                    <button className="popup-buttons2" onClick={handleCancel}>Cancel</button>
//                  </div>
//                </form>
//            </div>
//          </div>

// )}
//     </div>