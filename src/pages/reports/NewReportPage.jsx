import { useState } from "react";
import { toast } from "react-hot-toast";

export const NewReportPage = () => {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    date: false,
    time: false,
    location: false,
    description: false,
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErrors({
      name: false,
      date: false,
      time: false,
      location: false,
      description: false,
    });

    const upgradeErrors = {
      name: form.name.trim().length <= 3,
      date: form.date.trim().length < 10,
      time: form.time.trim().length <= 3,
      location: form.location.trim().length <= 3,
      description: form.description.trim().length <= 3,
    };

    if (Object.values(upgradeErrors).some((error) => error)) {
      setErrors(upgradeErrors);

      return toast.error("Ups! Hay errores en el formulario.");
    }

    const reports = JSON.parse(localStorage.getItem("reports") ?? "[]");
    reports.push(form);
    localStorage.setItem("reports", JSON.stringify(reports));

    console.log(form);
    console.log(upgradeErrors);

    setForm({
      name: "",
      date: "",
      time: "",
      location: "",
      description: "",
    });

    return toast.success("Su reporte fue enviado con exito.");
  }

  return (
    <div>
      <form
        className="w-4/12 mx-auto  mt-12 max-w-md p-6 rounded-md border"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center mb-6">Nuevo reporte</h1>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-gray-700 custom-cursor-default-hover" htmlFor="name">
              Nombre del pokemon
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              className="mt-1 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">Nombre es requerido</p>}
          </div>
          <div>
            <label className="block text-gray-700 custom-cursor-default-hover" htmlFor="date">
              Fecha de avistamiento
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={form.date}
              className="mt-1  w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              onChange={handleChange}
            />
            {errors.date && <p className="text-red-500 text-sm">Fecha es requerido</p>}
          </div>
          <div>
            <label className="block text-gray-700 custom-cursor-default-hover" htmlFor="time">
              Hora de avistamiento
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={form.time}
              class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              onChange={handleChange}
            />
            {errors.time && <p className="text-red-500 text-sm">Hora es requerido</p>}
          </div>
          <div>
            <label className="block text-gray-700 custom-cursor-default-hover" htmlFor="location">
              Ubicacion de avistamiento
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={form.location}
              className="mt-1  w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              onChange={handleChange}
            />
            {errors.location && <p className="text-red-500 text-sm">Ubicación es requerido</p>}
          </div>
          <div>
            <label
              className="block text-gray-700 custom-cursor-default-hover"
              htmlFor="description"
            >
              Descripcion
            </label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              onChange={handleChange}
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm">Descripción es requerido</p>}
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button type="submit" className="  w-1/2 rounded-md py-2 bg-blue-600 text-white ">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
