import React from "react";

const Genre = ({ data, setSelectGender, selectGenre }) => {
  const handleChange = (id) => {
    if (selectGenre.includes(id)) {
      setSelectGender((prev) => prev.filter((selectId) => selectId !== id));
    } else {
      setSelectGender((prev) => [...prev, id]);
    }
  };

  return (
    <div className="container flex gap-3 overflow-auto p-3">
      {data?.map((item) => (
        <div
          onClick={() => handleChange(item.id)}
          className={`p-3 border-2 border-transparent rounded-md cursor-pointer select-none transition-all duration-300 ease-in-out hover:border-green-900 hover:text-green-900 ${
            selectGenre.includes(item.id)
              ? "bg-slate-300 text-green-900"
              : "text-gray-700"
          }`}
          key={item.id}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Genre;
