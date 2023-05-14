const App = () => {

  return (

    <section className="h-full flex  place-content-center place-items-center">
        
      <section className=" p-2 m-3 w-full md:w-[500px]">
        
        <h1 className=" text-center text-2xl font-semibold">Inicio de sesión</h1>

        <form className=" mt-10 flex flex-col gap-y-5">

          {/* <label htmlFor="email">Correo electrónico</label> */}

          <input  name='email'id="email" type="text" className="border-2  border-gray-400 p-2 rounded-md focus:outline  focus:outline-indigo-600" placeholder="Correo Electrónico"/>
          <input type="text" className="border-2  border-gray-400 p-2 rounded-md focus:outline  focus:outline-indigo-600"  placeholder="contraseña"/>

          <button className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-500"> Login</button>
          
          <button className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-500" title="inicio de sesión con google"  >
              <p>Google</p>
          </button>
        </form>

      </section>
    </section>
  )
}

export default App
