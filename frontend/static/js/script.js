$(function() {
    var pruebas = $(".pruebas"),
      nivelesColores = $("#nivelesColores"),
      inputs = $("input"),
      inputClaveActual = $("#claveActual"),
      inputRepetirClaveActual = $("#repetirClaveActual"),
      fieldset = $("fieldset"),
      nivel;
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    /*Función a cambiar*/
    //Alumno: Oscar Stalyn Yanfer LAURA

    const LEVELS = {
      low: 8,
      medium: 12,
      high: 16
    };
    
    function devuelveNivel(input) {
      const passwordLength = input.val().length;
      const spanElement = document.querySelector(".spanNivelesColores");
    
      if (passwordLength === 0) {
        spanElement.classList.remove("spanNivelesColores", "bajo", "medio", "alto", "muyAlto");
        return;
      }
    
      if (passwordLength < LEVELS.low) {
        spanElement.classList.remove("medio", "alto", "muyAlto");
        spanElement.classList.add("spanNivelesColores", "bajo");
        nivel = "bajo";
      } else if (passwordLength < LEVELS.medium) {
        spanElement.classList.remove("bajo", "alto", "muyAlto");
        spanElement.classList.add("spanNivelesColores", "medio");
        nivel = "medio";
      } else if (passwordLength < LEVELS.high) {
        spanElement.classList.remove("bajo", "medio", "muyAlto");
        spanElement.classList.add("spanNivelesColores", "alto");
        nivel = "alto";
      } else {
        spanElement.classList.remove("bajo", "medio", "alto");
        spanElement.classList.add("spanNivelesColores", "muyAlto");
        nivel = "muy alto";
      }
    }
    
    input.addEventListener("input", (event) => {
      checkPasswordStrength(event.target);
    });
    
    /*
    function devuelveNivel(esteInput, evento) {
      var nivelBajo = 8,
        nivelMedio = 12,
        nivelAlto = 16,
        numCaracteres = esteInput.val().length,
        estaId = esteInput.attr("id"),
        espanNivelesColores = $(".spanNivelesColores");
      evento.stopPropagation();
      limpiarError();
      if (estaId === "claveActual") {
        if (numCaracteres > 0 && numCaracteres < nivelBajo) {
          nivel = "bajo";
                  espanNivelesColores.removeClass().addClass("spanNivelesColores bajo");        
        } 
        else if (numCaracteres >= nivelBajo && numCaracteres < nivelMedio) {
          nivel = "medio";
                  espanNivelesColores.removeClass().addClass("spanNivelesColores medio"); 
        } 
        else if (numCaracteres >= nivelMedio && numCaracteres < nivelAlto) {
          nivel = "alto";
                  espanNivelesColores.removeClass().addClass("spanNivelesColores alto"); 
        } 
        else if (numCaracteres >= nivelAlto) {
          nivel = "muy alto";
                  espanNivelesColores.removeClass().addClass("spanNivelesColores muyAlto");
        }
        if (numCaracteres === 0) {
          espanNivelesColores.removeClass().addClass("spanNivelesColores");
        }
      }
    }
    */

    /*Cambios sugeridos:
    Mejorar y optimizar la porción de código que retorna el nivel de seguridad de contraseña digitada por el usuario.
    Hacer uso de Query Selector y AddEventListener para escuchar el evento de "entrada" en el elemento de entrada, esto posibilitará mayor compatibilidad con diferentes navegadores
    */
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    function comprobarClave(e) {
      var divClaveCorrecta = $(".clavecorrecta"),
          espanNivelesColores = $(".spanNivelesColores"),
          nivelSeguridad = $("#nivelseguridad");
      e.preventDefault();
      e.stopPropagation();
      if (inputClaveActual.val() === inputRepetirClaveActual.val()) {
        divClaveCorrecta.removeClass("oculto");
        espanNivelesColores.removeClass().addClass("spanNivelesColores nulo");
        nivelSeguridad.html("");
        return true;
      } else {
        inputClaveActual.focus();
        mostrarError();
        inputs.val("");
      }
    }
    function mostrarError() {
      var divError = $(".error"),
          espanNivelesColores = $(".spanNivelesColores"),
          nivelSeg = $("#nivelseguridad");
      divError.removeClass("oculto", 600);
      nivel = "bajo";
      nivelSeg.html(nivel);
      espanNivelesColores.removeClass().addClass("spanNivelesColores nulo");
    }
    function limpiarError() {
      var divError = $(".error");
      if(!divError.hasClass("oculto")) {
        divError.addClass("oculto");
      }
    }
    $(document).on('keyup', 'input', function(e) {
      var nivelSeg = $("#nivelseguridad");
      devuelveNivel($(this), e);
      nivelSeg.html(nivel);
    });
  
    boton.click(comprobarClave);
  
    inputs.focus(limpiarError);
  });