export const NewReportPage = () => {
  return (
    <div>
      <form className="w-4/12 mx-auto  mt-12 max-w-md p-6 rounded-md border">
        <h1 className="text-2xl font-bold text-center mb-6">Nuevo reporte</h1>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-gray-700 custom-cursor-default-hover">
              Nombre del pokemon
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
          </div>
          <div>
            <label className="block text-gray-700 custom-cursor-default-hover">
              Fecha de avistamiento
            </label>
            <input
              type="date"
              className="mt-1  w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
          </div>
          <div>
            <label className="block text-gray-700 custom-cursor-default-hover">
              Hora de avistamiento
            </label>
            <input
              type="time"
              class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
          </div>
          <div>
            <label className="block text-gray-700 custom-cursor-default-hover">
              Ubicacion de avistamiento
            </label>
            <input
              type="text"
              className="mt-1  w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            />
          </div>
          <div>
            <label className="block text-gray-700 custom-cursor-default-hover">Descripcion</label>
            <textarea className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"></textarea>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="  w-1/2 rounded-md py-2 bg-blue-600 text-white ">Enviar</button>
        </div>
      </form>
    </div>
  );
};
