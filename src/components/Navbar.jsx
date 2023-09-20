import { useState } from 'react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Avatar, close, menu } from '../assets';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'College', href: '/dashboard/college', current: false },
  { name: 'Department', href: '/dashboard/Department', current: false },
  { name: 'Destination', href: '/dashboard/destination', current: false },
  { name: 'Request', href: '/dashboard/transcript-req', current: false },
  { name: 'Users', href: '/dashboard/users', current: false },
  { name: 'Checkout', href: '/dashboard/checkout', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [activeClass, setActiveClass] = useState('');
  const [hide, setHide] = useState(false);

  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        <>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <div className="relative items-center justify-center rounded-md  text-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ae67fa] md:hidden">
                  {/* <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span> */}
                  <div className="hover:border-[#ae67fa] hover:border p-2">
                    <img
                      src={toggle ? close : menu}
                      alt="menu"
                      onClick={() => setToggle(!toggle)}
                      className="px-2  w-10 h-10"
                    />
                  </div>

                  <div
                    className={`${
                      !toggle ? 'hidden ' : 'flex'
                    }  top-10 left-0 absolute rounded-b-lg bg-gray-800 w-[40rem] z-50 pb-3`}
                  >
                    <div className="flex flex-col ">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setActiveClass(item.name)}
                          className={`${
                            activeClass === item.name
                              ? ' text-white'
                              : 'text-gray-400 hover:bg-gray-700  '
                          } rounded-md px-3 py-2 text-base font-medium'`}
                          //   onClick={() => setHide(()=> )}
                          //   className={`${hide === true ? 'hidden' : 'block'}   `}
                          //    className={classNames(
                          //      item.current
                          //        ? 'bg-gray-900 text-white'
                          //       : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          //    'block rounded-md px-3 py-2 text-base font-medium'
                          //  )}
                          // className=" rounded-md px-3 py-2 text-base font-medium z-50"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className="text-xl font-bold text-neutral-600 bg-gradient-to-r from-[#ae67fa] to-[#f49867] inline-block text-transparent bg-clip-text">
                    Transcript Request
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setActiveClass(item.name)}
                        className={`${
                          activeClass === item.name
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700  hover:text-white'
                        } rounded-md px-3 py-2 text-sm font-medium'`}
                        // className={classNames(
                        //   item.current
                        //     ? 'bg-gray-900 text-white'
                        //     : 'text-gray-300 hover:bg-gray-700  hover:text-white',
                        //   'rounded-md px-3 py-2 text-sm font-medium'
                        // )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#ae67fa] focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={Avatar}
                        alt="avater profile"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* <Disclosure.Panel className="sm:hidden absolute top-12 rounded-b-lg bg-gray-800 w-full z-50 ">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  // onClick={() => setHide(()=> )}
                  className={`${hide === true ? 'hidden' : 'block'}   `}
                  // className={classNames(
                  //   item.current
                  //     ? 'bg-gray-900 text-white'
                  //     : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  //   'block rounded-md px-3 py-2 text-base font-medium'
                  // )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel> */}
        </>
      </Disclosure>
    </>
  );
};

export default Navbar;
