import { useStepperContext } from "../../contexts/StepperContext";

export default function Account({handleClick}) {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col mt-0">
      <div className="mt-1 text-2xl font-bold text-500 self-center">
        Welcome! First things first...
      </div>
      <div className="text-sm mt-1 text-gray-500 self-center">
        You can always change them later.
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold leading-8 text-gray-500">
          Full Name
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            placeholder="Steve Jobs"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold leading-8 text-gray-500">
          Display Name
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["password"] || ""}
            name="password"
            placeholder="Steve"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
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