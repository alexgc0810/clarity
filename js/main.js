	var volumetria_hepatica = document.getElementById("volumetria_hepatica").innerHTML;
	
	var volumetria_renal = document.getElementById("volumetria_renal").innerHTML;
	
	var planeamiento_quirurgico = document.getElementById("planeamiento_quirurgico").innerHTML;
	
	var analisis_pulmonar = document.getElementById("analisis_pulmonar").innerHTML;
	
	var seguimiento_oncologico = document.getElementById("seguimiento_oncologico").innerHTML;
	
	var postprocesado_vascular = document.getElementById("postprocesado_vascular").innerHTML;

	document.getElementById("btn_volumetria_hepatica").addEventListener("click", function vh(){
		document.getElementById("service_section").innerHTML = volumetria_hepatica;
		window.location.href = '#service_section';
	});
	document.getElementById("btn_volumetria_renal").addEventListener("click", function(){
		document.getElementById("service_section").innerHTML = volumetria_renal;
		window.location.href = '#service_section';
	});
	document.getElementById("btn_planeamiento_quirurjico").addEventListener("click", function(){
		document.getElementById("service_section").innerHTML = planeamiento_quirurgico;
		window.location.href = '#service_section';
	});
	document.getElementById("btn_analisis_pulmonar").addEventListener("click", function(){
		document.getElementById("service_section").innerHTML = analisis_pulmonar;
		window.location.href = '#service_section';
	});
	document.getElementById("btn_seguimiento_oncologico").addEventListener("click", function(){
		document.getElementById("service_section").innerHTML = seguimiento_oncologico;
		window.location.href = '#service_section';
	});
	document.getElementById("btn_postprocesado_vascular").addEventListener("click", function(){
		document.getElementById("service_section").innerHTML = postprocesado_vascular;
		window.location.href = '#service_section';
	});
