let feature1 = document.querySelector(".feature1");
let feature2 = document.querySelector(".feature2");
let feature3 = document.querySelector(".feature3");
let featuresItems = document.querySelectorAll(".button_feature");
let sectionInfos = document.querySelectorAll(".section2_container");
let feature1Info = document.querySelector(".section2_1");
let feature2Info = document.querySelector(".section2_2");
let feature3Info = document.querySelector(".section2_3");
let estado = false;
let algunoSelec = false;

featuresItems[0].classList.add("efecto_features");
featuresItems[0].style.color = "hsl(229, 31%, 21%)";

for (let p = 0; p < featuresItems.length; p++) {
  featuresItems[p].addEventListener("click", function () {
    if (algunoSelec == false) {
      for (let a = 0; a < featuresItems.length; a++) {
        featuresItems[a].classList.toggle(
          "efecto_features",
          featuresItems[a] == this
        );
        if (featuresItems[a] == this) {
          featuresItems[a].style.color = "hsl(229, 31%, 21%)";
        } else {
          featuresItems[a].style.color = "";
        }
      }
    }
  });
}

feature1Info.style.display = "flex";

function abrirFeature(info) {
  if (info.style.display !== "flex") {
    info.style.display = "flex";
  }
}

window.addEventListener("scroll", function () {
  let imagen = document.querySelector(".section2_img1");
  let info = document.querySelector(".section2_info1");

  function AgregarEfectoVsible(elemento) {
    const distancia = window.innerHeight - elemento.getBoundingClientRect().top;

    if (distancia >= 120) {
      elemento.classList.add("efecto_info_imagen");
    }
  }

  AgregarEfectoVsible(imagen);
  AgregarEfectoVsible(info);
});

function closeFeature(feature) {
  const featuresInfo = document.querySelectorAll(".section2_container");
  for (let i = 0; i < featuresInfo.length; i++) {
    if (
      featuresInfo[i] !== feature &&
      featuresInfo[i].style.display == "flex"
    ) {
      featuresInfo[i].style.display = "none";
    }
  }
}

feature1.addEventListener("click", function () {
  if (estado == false) {
    abrirFeature(feature1Info, feature1);
    closeFeature(feature1Info);
  }
});
feature2.addEventListener("click", function () {
  if (estado == false) {
    abrirFeature(feature2Info, feature2);
    closeFeature(feature2Info);
  }
});
feature3.addEventListener("click", function () {
  if (estado == false) {
    abrirFeature(feature3Info, feature3);
    closeFeature(feature3Info);
  }
});

let abrirRespuesta = document.querySelectorAll(".question");

for (let s = 0; s < abrirRespuesta.length; s++) {
  abrirRespuesta[s].addEventListener("click", function () {
    let respuesta = this.nextElementSibling;
    let flecha = this.querySelector(".flecha_abajo");

    respuesta.classList.toggle("efecto_pregunta");
    flecha.classList.toggle("efecto_flecha");

    for (let n = 0; n < abrirRespuesta.length; n++) {
      let nuevaRespuesta = abrirRespuesta[n].nextElementSibling;
      let nuevaFlecha = abrirRespuesta[n].querySelector(".flecha_abajo");

      if (nuevaRespuesta !== respuesta) {
        nuevaRespuesta.classList.remove("efecto_pregunta");
        if (nuevaFlecha !== flecha) {
          nuevaFlecha.classList.remove("efecto_flecha");
        }
      }
    }
  });
}

let enviarFormulario = document.querySelector(".enviar");
let inputText = document.querySelector(".sugerencia");
let iconoError = document.querySelector(".icono_error");
let mensajeError = document.querySelector(".mensaje_error_email");
let mensajeErrorVacio = document.querySelector(".mensaje_error_vacio");
let mensageExitoso = document.querySelector(".contenedor_mensaje_exitoso");
let contenedorInput = document.querySelector(".input_text");

function validarEmail(email) {
  // Expresión regular para validar el formato del correo electrónico
  var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(email);
}

function mostrarMensajeErrorVacio() {
  mensajeErrorVacio.style.display = "block";
  mensajeError.style.display = "none";
  iconoError.style.display = "block";
  contenedorInput.style.background = "hsl(0, 94%, 66%)";
  mensageExitoso.classList.remove("efecto_mensaje_exitoso");
}

function mostrarMensajeErrorInvalido() {
  mensajeError.style.display = "block";
  mensajeErrorVacio.style.display = "none";
  contenedorInput.style.background = "hsl(0, 94%, 66%)";
  iconoError.style.display = "block";
  mensageExitoso.classList.remove("efecto_mensaje_exitoso");
}

function mostrarMensajeExitoso() {
  mensajeErrorVacio.style.display = "none";
  iconoError.style.display = "none";
  mensajeError.style.display = "none";
  mensageExitoso.classList.add("efecto_mensaje_exitoso");
  contenedorInput.style.background = "";
  inputText.value = "";
}

// Validación del formulario
enviarFormulario.addEventListener("click", function (event) {
  event.preventDefault();

  if (inputText.value == "") {
    mostrarMensajeErrorVacio();
  } else if (!validarEmail(inputText.value)) {
    mostrarMensajeErrorInvalido();
  } else {
    mostrarMensajeExitoso();
  }
});

setTimeout(function () {
  const loadingOverlay = document.getElementById("loading-overlay");

  loadingOverlay.style.display = "none";
}, 1500);

let abrirMenuMovil = document.querySelector(".barra_movil");
let logo = document.querySelector(".logo");
let iconoAbrir = document.querySelector(".icon_abrir");
let iconoCerrar = document.querySelector(".icon_cerrar");
let conetendorLinks = document.querySelector(".hero_nav_movil");
let body = document.querySelector("body");
let estado_menu = false;

abrirMenuMovil.addEventListener("click", function () {
  if (estado_menu == false) {
    conetendorLinks.classList.toggle("efecto_nav_movil");
    body.classList.toggle("efecto_befor");
    iconoAbrir.style.display = "none";
    iconoCerrar.style.display = "block";
    logo.classList.toggle("efecto_logo");
    estado_menu = true;
  } else {
    conetendorLinks.classList.toggle("efecto_nav_movil");
    body.classList.toggle("efecto_befor");
    iconoAbrir.style.display = "flex";
    iconoCerrar.style.display = "block";
    logo.classList.toggle("efecto_logo");
    estado_menu = false;
  }
});
