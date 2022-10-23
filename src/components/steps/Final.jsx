export default function Final() {
    return (
      <div className="container md:mt-10">
        <div className="flex flex-col items-center">
          <div className="wrapper">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="#664de5"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
  
          <div className="mt-3 text-xl font-bold text-500">
            Congratulations, Eren!
          </div>
          <div className="text-sm mt-1 text-gray-500">
            Your have completed onboarding, you can start using the Eden!
          </div>
          <a className="mt-7" href="/user/dashboard" style={{width:'100%'}}>
            <button style={{width:'100%', backgroundColor:'#664de5',color: 'white'}} className="h-10 w-full text-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:text-100">
              Launch Eden
            </button>
          </a>
        </div>
      </div>
    );
  }