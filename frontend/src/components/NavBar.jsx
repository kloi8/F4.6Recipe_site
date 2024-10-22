const NavBar = () => {
    return (
      <nav className="bg-green-400 fixed w-full z-20 top-0 start-0">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-evenly mx-auto p-4">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Рецепты</span>
      </Link>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <Link to="recipe/category">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Категории
          </button>
        </Link>
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      </div>
    </div>
  </nav>
  
    )
  }

  export default NavBar