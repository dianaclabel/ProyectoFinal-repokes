import { useEffect, useState } from "react";

export const ReportsPage = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const storedReports = JSON.parse(localStorage.getItem("reports") ?? "[]");
    setReports(storedReports);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Reportes</h1>
      <table className="border-collapse border border-slate-500 w-5/6 ">
        <thead>
          <tr className="bg-gray-200 border border-slate-600">
            <th className="px-4 py-2 border border-slate-600">Nombre</th>
            <th className="px-4 py-2 border border-slate-600">Fecha</th>
            <th className="px-4 py-2 border border-slate-600">Hora</th>
            <th className="px-4 py-2 border border-slate-600">Ubicación</th>
            <th className="px-4 py-2 border border-slate-600">Descripción</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.name} className="border border-slate-600 text-center">
              <td className="px-4 py-2 border border-slate-600">{report.name}</td>
              <td className="px-4 py-2 border border-slate-600">{report.date}</td>
              <td className="px-4 py-2 border border-slate-600">{report.time}</td>
              <td className="px-4 py-2 border border-slate-600">{report.location}</td>
              <td className="px-4 py-2 border border-slate-600">{report.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
