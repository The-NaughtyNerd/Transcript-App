const SuccessSignin = () => {
  return (
    <div className="grid place-content-center md:h-screen bg-gradient-to-r from-[#5d12ad19] to-sky-50">
      <div className="w-full mx-auto">
        <h1 className="uppercase font-bold text-2xl">
          You have signedup successfully
        </h1>
        <button className=" text-white transition-all ease-out bg-[#ab60fa] hover:bg-[#9f5fe3] py-2 px-8 rounded-sm">
          Sign up &rarr;
        </button>
      </div>
    </div>
  );
};

export default SuccessSignin;
