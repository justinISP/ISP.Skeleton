(function ($) {

    "use strict";

        // Accordion
        function toggle(id){
            var e = document.getElementById(id);

            if (e.style.display == "none"){
                e.style.display = "";
            } else {
                e.style.display = "none";
            }
        }

        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }

    })(window.jQuery);
