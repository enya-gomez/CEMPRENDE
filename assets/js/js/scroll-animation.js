// JavaScript Document
		$(document).ready(()=>{});
		
		$(document).ready(()=>{


		var show=false;
		$(window).scroll(function(){
			if(!show)
			{
				var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
				var  scrolltrigger = 0.12;
				if((wintop/(docheight-winheight)) > scrolltrigger && !show) {
					$("#plataforma_crowfunding").removeAttr("style");
					$("#concurso_de_planes_de_negocios").removeAttr("style");
					$("#emprendimiento_inhouse").removeAttr("style");
					$("#talleres_online").removeAttr("style");
					$("#talleres_live").removeAttr("style");
					$("#bootcamps").removeAttr("style");
					

					$("#plataforma_crowfunding").css("animation","fade-in-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
					$("#concurso_de_planes_de_negocios").css("animation","fade-in-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.2s both");
					$("#emprendimiento_inhouse").css("animation","fade-in-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.4s both");
					$("#talleres_online").css("animation","fade-in-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.6s both");
					$("#talleres_live").css("animation","fade-in-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.8s both");
					$("#bootcamps").css("animation","fade-in-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1.0s both");
					

					show=true;
				}
			}
		});			
	});
		
		$(document).ready(()=>{

			var show=false;
			$(window).scroll(function(){
				if(!show)
				{
					var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
					var  scrolltrigger = 0.23;
					if((wintop/(docheight-winheight)) > scrolltrigger && !show) {
						$("#hustler_img").removeAttr("style");
						$("#evangelizer_img").removeAttr("style");
						$("#ambassador_img").removeAttr("style");
						$("#panafull_img").removeAttr("style");
						$("#preacher_img").removeAttr("style");
						$("#alien_img").removeAttr("style");

						$("#hustler_nombre").removeAttr("style");
						$("#evangelizer_nombre").removeAttr("style");
						$("#ambassador_nombre").removeAttr("style");
						$("#panafull_nombre").removeAttr("style");
						$("#preacher_nombre").removeAttr("style");
						$("#alien_nombre").removeAttr("style");





						$("#hustler_img").css("animation","fade-in-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
						$("#evangelizer_img").css("animation","fade-in-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.2s both");
						$("#ambassador_img").css("animation","fade-in-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.4s both");
						$("#panafull_img").css("animation","fade-in-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.6s both");
						$("#preacher_img").css("animation","fade-in-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.8s both");
						$("#alien_img").css("animation","fade-in-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1.0s both");


						$("#hustler_nombre").css("animation","rotate-in-2-tl-cw 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.2s both");
						$("#evangelizer_nombre").css("animation","rotate-in-2-tl-cw 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.4s both");
						$("#ambassador_nombre").css("animation","rotate-in-2-tl-cw 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.6s both");
						$("#panafull_nombre").css("animation","rotate-in-2-tl-cw 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.8s both");
						$("#preacher_nombre").css("animation","rotate-in-2-tl-cw 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both");
						$("#alien_nombre").css("animation","rotate-in-2-tl-cw 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.2s both");


						show=true;
					}
				}
			});			
		});