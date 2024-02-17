<template>
  <div class="py-4 container-fluid">
    <h2 class="text-white">
      <i class="fas fa-file-signature"></i>
      Preguntas personalizadas
    </h2>

    <!-- 
      INFO
      {{ preguntas }}
    {{ validateData }} -->
    <div
      style="height: auto; border-radius: 20px"
      class="py-2 bg-white container-fluid"
    >
      <h3 class="mt-4">Personaliza tus preguntas.</h3>
      <div class="row">
        <div class="col-sm-12 col-md-4 col-lg-8">
          <span>
            En esta seccion podras adaptar preguntas con tus preferencias, para
            que tus clientes cuenten su experiencia.
          </span>
          <br />

          <span> (Limite de 5 Preguntas) </span>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-2 ">
          <button :disabled="verifyLength" @click="addCuestion" class="btn">
            Agregar Pregunta
          </button>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-2">
          <button
            :disabled="empty || validateData"
            @click="saveCuestions"
            class="btn btn-success"
          >
            Guardar Cuestionario
          </button>
        </div>
      </div>

      {{ validateData ? "Porfavor llena todos los campos" : "" }}
      <div class="row" v-for="(item, index) in preguntas" :key="index">
        <div class="">
          <div class="ma-2 mt-2">
            <h6>Pregunta No. {{ index + 1 }}</h6>
            <form class="row g-3">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <input
                  v-model="item.texto"
                  type="text"
                  class="form-control"
                  :placeholder="item.texto"
                />
              </div>
           
            </form>

            <div class="row">
              <div class="mt-1 col-sm-12 col-md-6 col-lg-3">
                <div class="form-check">
                  <input
                    v-model="item.obligatoria"
                    style="border: 2px solid grey"
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                  />

                  <label class="form-check-label" for="flexCheckDefault">
                    Pregunta Obligatoria
                  </label>
                </div>
              </div>
              <div class="mt-1 col-sm-12 col-md-6 col-lg-4">
                <div class="form-check">
                  <input
                    style="border: 2px solid grey"
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />

                  <label class="form-check-label" for="flexCheckDefault">
                    Esta pregunta contara en la puntuacion de tu colaborador.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col"></div>

        <div class="row">
          <div class="col">
            <h5 style="color: #2dcec9">Tipo de Clasificacion</h5>

            <div class="row">
              <div class="col">
                <div class="form-check">
                  <input
                    v-model="item.tipo"
                    value="rango"
                    class="form-check-input"
                    type="radio"
                    @change="clearBoth(item.tipo, index)"
                  />
                  <label class="form-check-label"> De rango </label>
                </div>
              </div>
              <div class="col">
                <div class="form-check">
                  <input
                    v-model="item.tipo"
                    value="cerrado"
                    @change="clearBoth(item.tipo, index)"
                    class="form-check-input"
                    type="radio"
                  />
                  <label class="form-check-label"> Cerrada (Si o No) </label>
                </div>
              </div>
              <div class="col">
                <div class="form-check">
                  <input
                    @change="clearBoth(item.tipo, index)"
                    v-model="item.tipo"
                    value="abierto"
                    class="form-check-input"
                    type="radio"
                  />
                  <label class="form-check-label"> Abierta </label>
                </div>
              </div>
              <div class="col">
                <div class="form-check">
                  <input
                    @change="clearBoth(item.tipo, index)"
                    v-model="item.tipo"
                    value="opciones"
                    class="form-check-input"
                    type="radio"
                  />
                  <label class="form-check-label"> Opciones </label>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div v-if="item.tipo == 'rango'" class="row">
              <div class="col">
                <h6 style="color: #2dcec9">¿Que icono te gustaria utilizar?</h6>

                <div class="form-check form-check-inline">
                  <input
                    v-model="item.icono"
                    class="form-check-input"
                    type="radio"
                    value="star"
                  />

                  <i class="fas fa-star"></i>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    v-model="item.icono"
                    class="form-check-input"
                    type="radio"
                    value="smile-beam"
                  />

                  <i class="fas fa-smile-beam"></i>
                </div>
              </div>
              <div class="col">
                <h6 style="color: #2dcec9">Rango Maximo</h6>

                <div class="form-check form-check-inline">
                  <input
                    v-model="item.rangoMaximo"
                    class="form-check-input"
                    type="radio"
                    value="5"
                  />
                  <label class="form-check-label">5</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    v-model="item.rangoMaximo"
                    class="form-check-input"
                    type="radio"
                    value="4"
                  />
                  <label class="form-check-label">4</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    v-model="item.rangoMaximo"
                    class="form-check-input"
                    type="radio"
                    value="3"
                  />
                  <label class="form-check-label">3</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    v-model="item.rangoMaximo"
                    class="form-check-input"
                    type="radio"
                    value="2"
                  />
                  <label class="form-check-label">2</label>
                </div>
              </div>
            </div>

            <div v-if="item.tipo == 'opciones'" class="row g-2 mt-4">
              <div class="col-sm-12 col-md-5">
                <input
                  v-model="item.opciones[0]"
                  type="text"
                  class="form-control"
                  placeholder="Input 1"
                />
              </div>
              <div class="col-sm-12 col-md-5">
                <input
                  v-model="item.opciones[1]"
                  type="text"
                  class="form-control"
                  placeholder="Input 2"
                />
              </div>
              <div class="col-sm-12 col-md-5">
                <input
                  v-model="item.opciones[2]"
                  type="text"
                  class="form-control"
                  placeholder="Input 3"
                />
              </div>
              <div class="col-sm-12 col-md-5">
                <input
                  v-model="item.opciones[3]"
                  type="text"
                  class="form-control"
                  placeholder="Input 4"
                />
              </div>
            </div>

            <!-- 
            <CuestionYN v-if="item.tipo == 'cerrado'"/>
            <CuestionOpen  v-if="item.tipo == 'abierto' "/> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CuestionYN from '../components/CuestionYN.vue';
// import CuestionOpen from '../components/CuestionOpen.vue';
export default {
  //components:{CuestionOpen,CuestionYN},
  data: () => {
    return {
      preguntas: [],
    };
  },
  computed: {
    verifyLength() {
      if (this.preguntas.length == 5) {
        return true;
      } else {
        return false;
      }
    },
    empty() {
      if (this.preguntas.length == 0) {
        return true;
      } else {
        return false;
      }
    },
    validateData() {
      const condition = this.preguntas.every((pregunta) => "tipo" in pregunta);
      
      if (condition) {
        const v1 = this.preguntas.every((pregunta) => "icono" in pregunta);
        const v2 = this.preguntas.every(
          (pregunta) => "rangoMaximo" in pregunta
        );
        const values = this.preguntas.every(
          (pregunta) => "opciones" in pregunta
        );

        if (v1 == true && v2 == true && values == true) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    },
  },
  methods: {
    addCuestion() {
      console.log("ola");
      this.preguntas.push({
        texto: "¿Cómo calificarías la calidad de nuestro servicio?",
        obligatoria: false,
        tipo: "rango",
        rangoMaximo: 5,
        icono: "star",
        opciones: [],
      });
    },
    updateRange(value) {
      console.log(value);
    },
    clearBoth(tipo, index) {
      switch (tipo) {
        case "rango":
          this.preguntas[index].icono = "star";
          this.preguntas[index].rangoMaximo = 5;
          this.preguntas[index].opciones = [];
          break;

        case "opciones":
          this.preguntas[index].icono = "";
          this.preguntas[index].rangoMaximo = null;
          this.preguntas[index].opciones = [
            "Opcion1",
            "Opcion2",
            "Opcion3",
            "Opcion4",
          ];
          break;

        case "cerrado":
          this.preguntas[index].icono = "";
          this.preguntas[index].rangoMaximo = null;
          this.preguntas[index].opciones = [];
          break;

        case "abierto":
          this.preguntas[index].icono = "";
          this.preguntas[index].rangoMaximo = null;
          this.preguntas[index].opciones = [];
          break;

        default:
          break;
      }
    },
    saveCuestions() {
      console.log({
        preguntas: this.preguntas,
      });
    },
  },
};
</script>