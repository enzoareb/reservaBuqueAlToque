document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
  event.preventDefault()
  let usuario = document.getElementById("input_nombre").placeholder;
  if (usuario.length === 0) {
    alert('No has escrito tu nombre.');
    return;
  }
  let dni_cliente = document.getElementById("input_dni").placeholder;
  if (!validarDNI(dni_cliente)) {
    alert('El DNI es invalido, por favor asegurese de escribirlo correctamente.');
    return;
  }
  let email_cliente = document.getElementById("input_email").placeholder;
  if (!validarEmail(email_cliente)) {
    alert('Formato de email invalido, por favor asegurese de escribir un email valido');
    return;
  }

}

function validarDNI(dni) {
  let regexDNI = /^\d{8}(?:[-\s]\d{4})?$/;
  return regexDNI.test(dni);
}

function validarEmail(email) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regexEmail.test(email);
}

function convertirMoneda() {
  let monedaElegida = document.getElementById("select_moneda").value;
  let etiquetaMonto = document.getElementById("precio_total");
  let monto = etiquetaMonto.textContent.match(/\d+/g);
  let moneda = etiquetaMonto.textContent.match(/[A-Za-z]+/g);
  if (monedaElegida === 'argentino' && moneda[0] === 'UYU') {
    let precioArgentino = Math.floor(Number(monto[0]) * 3.089);
    etiquetaMonto.innerHTML = "$" + precioArgentino.toString() + ' ARS';
  }
  if (monedaElegida === 'uruguayo' && moneda[0] === 'ARS') {
    let precioUruguayo = Math.floor(Number(monto[0]) * 0.3238);
    etiquetaMonto.innerHTML = "$" + precioUruguayo.toString() + ' UYU';
  }
}

function calcularMontoVehiculo() {
  let costoXVehiculoUruguay = 5000 * 0.3238;
  let costoXVehiculoArgentina = 5000 * 3.089;
  let total = 0;
  let cantidadVehiculosElegida = document.getElementById("select_vehiculo").value;
  const etiquetaPrecio = document.getElementById("precio_total");
  let valorMoneda = etiquetaPrecio.textContent.match(/[A-Za-z]+/g);
  let montoAcumulado = etiquetaPrecio.textContent.match(/\d+/g)[0];
  const montoAux = Number(montoAcumulado);
  const precioConUnVehiculoUR = Number(montoAux) + 1 * costoXVehiculoUruguay;
  const precioConDosVehiculosUR = Number(montoAux) + 2 * costoXVehiculoUruguay;
  const precioConTresVehiculosUR = Number(montoAux) + 3 * costoXVehiculoUruguay;
  const precioConCuatroVehiculosUR = Number(montoAux) + 4 * costoXVehiculoUruguay;
  const precioConUnVehiculoAR = Number(montoAux) + 1 * costoXVehiculoArgentina;
  const precioConDosVehiculosAR = Number(montoAux) + 2 * costoXVehiculoArgentina;
  const precioConTresVehiculosAR = Number(montoAux) + 3 * costoXVehiculoArgentina;
  const precioConCuatroVehiculosAR = Number(montoAux) + 4 * costoXVehiculoArgentina;
  if (valorMoneda[0] === 'UYU') {
    if (cantidadVehiculosElegida === "0") {
      total = montoAux;
      document.getElementById("precio_total").innerHTML = "$" + total + " UYU";
    }
    if (cantidadVehiculosElegida === "1") {
      total = precioConUnVehiculoUR;
      document.getElementById("precio_total").innerHTML = "$" + total + " UYU";
    }

    if (cantidadVehiculosElegida === "2") {
      total = precioConDosVehiculosUR;
      document.getElementById("precio_total").innerHTML = "$" + total + " UYU";
    }

    if (cantidadVehiculosElegida === "3") {
      total = precioConTresVehiculosUR;
      document.getElementById("precio_total").innerHTML = "$" + total + " UYU";
    }
    if (cantidadVehiculosElegida === "4") {
      total = precioConCuatroVehiculosUR;
      document.getElementById("precio_total").innerHTML = "$" + total + " UYU";
    }
  }

  if (valorMoneda[0] === 'ARS') {
    if (cantidadVehiculosElegida === "0") {
      total = montoAux;
      document.getElementById("precio_total").innerHTML = "$" + total + " ARS";
    }
    if (cantidadVehiculosElegida === "1") {
      total = precioConUnVehiculoAR;
      document.getElementById("precio_total").innerHTML = "$" + total + " ARS";
    }

    if (cantidadVehiculosElegida === "2") {
      total = precioConDosVehiculosAR;
      document.getElementById("precio_total").innerHTML = "$" + total + " ARS";
    }

    if (cantidadVehiculosElegida === "3") {
      total = precioConTresVehiculosAR;
      document.getElementById("precio_total").innerHTML = "$" + total + " ARS";
    }
    if (cantidadVehiculosElegida === "4") {
      total = precioConCuatroVehiculosAR;
      document.getElementById("precio_total").innerHTML = "$" + total + " ARS";
    }
  }


}
