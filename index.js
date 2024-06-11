
        // Función que me aplica el estilo a la opción seleccionada y quita la previamente seleccionada
        function seleccionar(link) {
            var opciones = document.querySelectorAll('#links a');
            opciones.forEach(opcion => opcion.classList.remove('seleccionado'));
            link.classList.add('seleccionado');

            // Hacemos desaparecer el menú una vez que se ha seleccionado una opción en modo responsive
            var x = document.getElementById("nav");
            x.className = "";
        }

        // Función que muestra el menú responsive
        function responsiveMenu() {
            var x = document.getElementById("nav");
            if (x.className === "nav") {
                x.className += " responsive";
            } else {
                x.className = "nav";
            }
        }

        // Detecto el scrolling para aplicar la animación de la barra de habilidades
        window.onscroll = function() { efectoHabilidades() };

        // Función que aplica la animación de la barra de habilidades
        function efectoHabilidades() {
            var skills = document.getElementById("skills");
            if (skills) {
                var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
                if (distancia_skills >= 300) {
                    document.getElementById("html").classList.add("barra-progreso1");
                    document.getElementById("js").classList.add("barra-progreso2");
                    document.getElementById("bd").classList.add("barra-progreso3");
                    document.getElementById("ps").classList.add("barra-progreso4");
                }
            }
        }