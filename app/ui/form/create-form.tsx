export default function Form() {
  return (
    <form>
      {/* Campo para el nombre completo */}
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Nombre completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Ingrese su nombre completo"
            className="w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder-gray-500"
            aria-describedby="amount-error"
          />
        </div>

        {/* Campo para el correo electrónico */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Ingrese su correo electrónico"
            className="w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder-gray-500"
          />
        </div>

        {/* Campo para el número de teléfono */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium">
            Número de teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Ingrese su número de teléfono"
            className="w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder-gray-500"
          />
        </div>

        {/* Campo para la cantidad de inversión deseada */}
        <div className="mb-4">
          <label
            htmlFor="investmentAmount"
            className="block text-sm font-medium"
          >
            Cantidad de inversión deseada
          </label>
          <input
            id="investmentAmount"
            name="investmentAmount"
            type="number"
            placeholder="Ingrese la cantidad deseada"
            className="w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder-gray-500"
          />
        </div>

        {/* Campo para el plazo de inversión */}
        <div className="mb-4">
          <label htmlFor="investmentTerm" className="block text-sm font-medium">
            Plazo de inversión (en meses)
          </label>
          <input
            id="investmentTerm"
            name="investmentTerm"
            type="number"
            placeholder="Ingrese el plazo en meses"
            className="w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder-gray-500"
          />
        </div>

        {/* Campo para el objetivo de inversión */}
        <div className="mb-4">
          <label htmlFor="investmentGoal" className="block text-sm font-medium">
            Objetivo de inversión
          </label>
          <select
            id="investmentGoal"
            name="investmentGoal"
            className="w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2"
          >
            <option value="">Seleccione una opción</option>
            <option value="income">Ingresos pasivos</option>
            <option value="appreciation">Plusvalía</option>
            <option value="both">Ambos</option>
          </select>
        </div>
      </div>

      {/* Botón de envío */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Enviar
      </button>
    </form>
  );
}
