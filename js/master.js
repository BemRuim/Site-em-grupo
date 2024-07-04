document
        .getElementById("select")
        .addEventListener("change", function () {
          var camposPredio = document.getElementById("residencia");
        
          if (this.value === "predio") {
            camposPredio.classList.remove("invisivel");
            camposPredio.classList.add("visivel");
          } else {
            camposPredio.classList.remove("visivel");
            camposPredio.classList.add("invisivel");
          }
        });