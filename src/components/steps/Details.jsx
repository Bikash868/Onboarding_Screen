
export default function Details({handleClick}) {

  return (
    <div className="flex flex-col ">
      <div className="mt-1 text-2xl font-bold text-500 self-center">
        Let's set up a home for all your work
      </div>
      <div className="text-sm mt-1 text-gray-500 self-center">
        You can always create another workspace later.
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8">
          Workspace Name
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            name="address"
            placeholder="Eden"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8">
          Workspace URL
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            name="city"
            placeholder="www.eden.com/"
            type="url"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <span className="mt-7" style={{width:'100%'}} onClick={()=>handleClick("next")}>
        <button style={{width:'100%', backgroundColor:'#664de5',color: 'white'}} className="h-10 w-full text-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:text-100">
          Create Workspace
        </button>
      </span>
    </div>
  );
}