
export default function TaskForm() {
    const handleSubmit = () => {
        console.log("Form Submitted")
    }
    return (
      <form action="" onSubmit={handleSubmit} >
         <input 
           type="text"
           placeholder="Add a task..."
           className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-black-500 shadow-sm"
           />
         <button type="submit" className="mt-4 bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded">Add</button>
      </form>
    );
}