import React from 'react'

const Input_box = (props) => {
    const {value, setvalue, title} = props;
  return (
    <div>
        <input
            type="text"
            id="username"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            className="mt-1 w-full px-5 py-3 text-xl border-none rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-zinc-100"
            placeholder={title}
            required
        />
    </div>
  )
}

export default Input_box
