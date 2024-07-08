import {React} from "react";

const Form = ({title, setTitle, desc, setDesc, createFn}) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    if((title && desc) !== ""){
    createFn(title, desc);
    setTitle("");
    setDesc("");
    }
  };

  return (
    <div className="flex justify-end h-fit p-10 overflow-hidden">
      <form
        className="p-6 rounded-lg shadow-lg w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-400"
          >
            Title
          </label>
          <input
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
            id="title"
            type="text"
            className="mt-1 block w-full p-2.5 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-400"
          >
            Description
          </label>
          <textarea
            value={desc}
            onChange={(e)=> setDesc(e.target.value)}
            id="description"
            className="mt-1 block w-full p-2.5 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
