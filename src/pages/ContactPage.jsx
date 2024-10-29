import Title from "../components/Title";
import image from "../assets/Contact.jpg";
import FormData from "../components/Form";

const ContactPage = () => {
  return (
    <div>
      <hr className="mt-4 border-t border-gray-200" />
      <div className="text-3xl mt-5 text-center mb-4">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="flex flex-col gap-8 w-[90%] justify-center md:items-center md:flex-row">
        <img src={image} alt="contact image" className="w-[100%] md:w-[40%]" />

        <div className="flex flex-col">
          <h1 className="font-bold text-xl text-gray-700 mb-3">Location</h1>
          <div className="text-gray-500">
            <p>NewRoad, Baneshwor</p>
            <p>Kathmandu, Nepal</p>
            <p className="mt-5">Ph: +977 0000000000</p>
            <p>Email: hamropasal@gmail.com</p>
          </div>
          <div>
            <button className="border px-7 py-5 font-semibold hover:text-white hover:bg-black transition-all duration-500 mt-8">
              Explore More!
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <FormData />
      </div>
    </div>
  );
};

export default ContactPage;
