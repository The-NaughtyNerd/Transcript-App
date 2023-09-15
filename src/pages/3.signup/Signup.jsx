import { useState } from 'react';

const Signup = () => {
  const [selectOption, setSelectOption] = useState('');

  const handleChange = (event) => {
    setSelectOption(event.target.value);
    console.log(selectOption);
  };

  return (
    <div className="grid place-content-center overflow-hidden md:h-screen bg-gradient-to-r from-[#5d12ad19] to-sky-50">
      <div className="w-full flex md:flex-row-reverse flex-col justify-between md:p-14 rounded-md shadow-2xl">
        <div className="md:w-1/2 w-full md:bg-neutral-50 p-4 flex items-center justify-center">
          <img
            src="/src/assets/welcome.svg"
            alt=""
            className="md:w-full w-[90%]"
          />
        </div>

        <div className="md:w-1/2 w-full flex flex-col justify-center  bg-white pl-7 pt-6 md:pb-0 pb-5 rounded-t-3xl md:rounded-none">
          <h1 className="text-4xl font-semibold text-neutral-600">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-[#ae67fa] to-[#f49867] inline-block text-transparent bg-clip-text">
              Transcript Request
            </span>
          </h1>
          <h6 className="text-lg font-semibold text-neutral-600 pt-1">
            Create your account
          </h6>

          <form action="" className="py-4 grid grid-cols-2 gap-x-1 gap-y-4 ">
            <div className=" flex flex-col">
              <label htmlFor="name" className="text-base pb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className="border w-[90%] py-1.5 rounded-[4px] focus:border focus:border-blue-400 px-3 outline-none"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="username" className="text-base pb-1 font-medium">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Your Username"
                className="border w-[90%] py-1.5  rounded-[4px] focus:border focus:border-blue-400 px-3 outline-none"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className=" text-base pb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
                className="border w-[90%] py-1.5 rounded-[4px] focus:border focus:border-blue-400 px-3 outline-none "
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-base pb-1 font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                id="password"
                className="border w-[90%] py-1.5 rounded-[4px] focus:border focus:border-blue-400 px-3 outline-none"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="college" className=" text-base pb-1 font-medium">
                College
              </label>
              <select
                name="college"
                id="college"
                onChange={handleChange}
                value={selectOption}
                className="border w-[90%] py-1.5  rounded-[4px] focus:border focus:border-blue-400 px-3 outline-none"
                required
              >
                <option value="">Select College</option>
                <option value="option 1">Health</option>
                <option value="option 2">Mass Communication</option>
                <option value="option 3">Computer Science</option>
                <option value="option 4">Medicine & Surgery</option>
              </select>
              <p>Selected Options: {selectOption}</p>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="department"
                className=" text-base pb-1 font-medium"
              >
                Department
              </label>
              <input
                type="text"
                name="department"
                id="department"
                placeholder="Department"
                className="border w-[90%] py-1.5  rounded-[4px] focus:border focus:border-blue-400 px-3 outline-none"
                required
              />
            </div>

            <div>
              <button className="w-[90%] text-white transition-all ease-out bg-[#ab60fa] hover:bg-[#9f5fe3] py-2 px-8 rounded-sm">
                Sign up &rarr;
              </button>
            </div>
          </form>

          {/* <form className="pt-4">
            <label htmlFor="name" className="pl-3 text-base pb-1 font-medium">
              Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="border w-[70%] py-1.5 mb-5 rounded-[4px] focus:border focus:border-blue-400 px-3 outline-none"
            />
            <br />
            <label htmlFor="email" className="pl-3 text-base pb-1 font-medium">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              id=""
              placeholder="example@mail.com"
              className="border w-[70%] py-1.5 mb-5 rounded-[4px] focus:border focus:border-blue-400 px-3 outline-none "
            />
            <br />
            <label
              htmlFor="password"
              className="pl-3 text-base pb-1 font-medium"
            >
              Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="password"
              id=""
              className="border w-[70%] py-1.5 mb-5 rounded-[4px] focus:border focus:border-blue-400 px-3 outline-none"
            />
            <br />
            <button className="text-white transition-all ease-out bg-[#ab60fa] hover:bg-[#9f5fe3] py-2 px-8 rounded-sm">
              Sign up &rarr;
            </button>
          </form> */}

          <h6 className="text-lg text-neutral-600 pt-1">
            Already have an account?{' '}
            <a href="/signin" className="text-indigo-700 underline">
              Sign in
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Signup;
