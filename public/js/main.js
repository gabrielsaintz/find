function menuon() {
   let menu = document.querySelector("nav .menu");

   if (menu.classList.contains("menuon")) {
      return menu.classList.remove("menuon");
   }
   menu.classList.add("menuon");
}

ScrollReveal({
   origin: "top",
   distance: "30px",
   duration: 700,
}).reveal(`
 #home, 
 #home header,
 #home .filter,
 #home .select,
 #about,
 #about header,
 #about .aboutme,
 #about img,
 #benefits,
 #benefits header,
 #benefits .profits,
 #benefits .profit,
 #professionals,
 #professionals .professional,
 #myProfile,
 #professionalschedule,
 #professionalschedule .professional,
 #professionalschedule .scheduleok img,
 #professionalschedule .formSchedule
 `);
