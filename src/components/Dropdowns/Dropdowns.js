/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { Menu, Transition } from '@headlessui/react'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
    <Menu as="div" className="relative inline-block text-left mx-3">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 ">
              Sort <IoIosArrowDown className="justify-center items-center mt-1 mx-1" />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className=" origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900 rounded-md w-full text-left' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Price - Low to High
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900 w-full text-left' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Price - High to Low
                    </button>
                  )}
                </Menu.Item>
              </div>
             
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 ">
              Filter <IoIosArrowDown className="justify-center items-center mt-1 mx-1" />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className=" origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900 rounded-md w-full text-left' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Price - Low to High
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900 w-full text-left' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Price - High to Low
                    </button>
                  )}
                </Menu.Item>
              </div>
             
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
    </div>
  )
}
