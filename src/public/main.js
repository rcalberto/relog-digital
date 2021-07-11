function actualizarHora(){
		// Obtenemos la fecha actual, incluyendo las horas, minutos, segundos, dia de la semana, dia del mes, mes y año;
		var fecha = new Date(),
                segundos = fecha.getSeconds(),
                minutos = fecha.getMinutes(),
                horas = fecha.getHours(),
                diaSemana = fecha.getDay(),
                dia = fecha.getDate(),
                mes = fecha.getMonth(),
                year = fecha.getFullYear();

        var pHoras = document.getElementById("pHoras"),
                pMinutos = document.getElementById("pMinutos"),
                pSegundos = document.getElementById("pSegundos"),
                pDiaSemana = document.getElementById("pDiaSemana"),
                pDia = document.getElementById("pDia"),
                pMes = document.getElementById("pMes"),
                pYear = document.getElementById("pYear"),
                pSaludo = document.getElementById("pSaludo");

                var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
                pDiaSemana.textContent = semana[diaSemana];

		pDia.textContent = dia;

		var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
		pMes.textContent = meses[mes];
		pYear.textContent = year;

		
		pHoras.textContent = horas;
		

		if (minutos < 10){ minutos = "0" + minutos; }
		if (segundos < 10){ segundos = "0" + segundos; }

		pMinutos.textContent = minutos;
		pSegundos.textContent = segundos;
                
                if(horas >= 0 && horas <12){
                        pSaludo.textContent='Buenos dias';
                      
                }else if(horas >= 12 && horas <18){
                        pSaludo.textContent='Buenas tardes';
                }

                else{
                        pSaludo.textContent='Buenas noches';
                }
                
                
	};

	actualizarHora();
	var intervalo = setInterval(actualizarHora, 1000);
