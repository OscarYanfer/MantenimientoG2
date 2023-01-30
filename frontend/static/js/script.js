$(function() {
    var pruebas = $(".pruebas"),
      nivelesColores = $("#nivelesColores"),
      inputs = $("input"),
      inputClaveActual = $("#claveActual"),
      inputRepetirClaveActual = $("#repetirClaveActual"),
      fieldset = $("fieldset"),
      nivel;
  
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
  


    /* SUGERENCIA DE MEJORA
      Se podría eliminar el valor de los inputs así como el evento stopPropagation() ya que no es necesario.
      Además de estandarizar los nombres utilizados al idioma ingles*/

      function checkPassword(event) {
        event.preventDefault();
        event.stopPropagation();
        var correctPass = $(".clavecorrecta"),
            securityLevel = $("#nivelseguridad"),
            colorIndicator = $(".spanNivelesColores");
        if (inputClaveActual.val() === inputRepetirClaveActual.val()) {
            correctPass.removeClass("oculto");
            colorIndicator.removeClass().addClass("spanNivelesColores nulo");
            securityLevel.html("");
            return true;
        } else {
            inputClaveActual.focus();
            showError();
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