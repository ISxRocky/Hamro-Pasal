const FormData = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="py-10 px-4 min-h-screen">
      <h1 className="font-semibold text-4xl text-gray-700 text-center mb-10">
        Get in Touch
      </h1>
      <div className="flex justify-center">
        <div className="border border-gray-200 shadow-lg rounded-lg p-8 w-full max-w-md bg-gray-50">
          <form className="space-y-6">
            <div>
              <label className="block font-medium text-gray-600 mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-400 transition-all"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-600 mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-400 transition-all"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-600 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-400 transition-all"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-600 mb-2">
                Phone
              </label>
              <input
                type="text"
                placeholder="Phone"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-400 transition-all"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-600 mb-2">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-400 transition-all"
                rows="4"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormData;
