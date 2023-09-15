import React, { useEffect, useState } from 'react';

const Departments = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option

  useEffect(() => {
    fetchOptions(); // Fetch options when the component mounts
  }, []);

  const fetchOptions = async () => {
    try {
      const response = await fetch(
        'http://api.transcript.almanaracademy.com.ng/departments'
      ); // Replace with your API endpoint
      const data = await response.json();
      setOptions(data.data); // Set the received data as options
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue); // Update selected option
    const selected = options.find((option) => option.title === selectedValue);
  };

  return (
    <div>
      <label htmlFor="college" className=" text-base pb-1 font-medium">
        Department: <span className="text-neutral-500">{selectedOption}</span>
      </label>

      <select
        name="college"
        id="college"
        className="border w-[90%] py-1.5 rounded-[4px] focus:border focus:border-blue-400 px-3 outline-none"
        required
        onChange={handleOptionChange}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Departments;
