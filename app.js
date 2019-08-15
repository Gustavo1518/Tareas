const app = new Vue({
    el: '#app',
    data: {
        titulo: 'TAREAS POR HACER EN EL CONACYT',
        subtitulo: 'Elaborado por Gustavo Meneses Sierra',
        tareas: [{ tarea: "Agrega Una Nueva Tarea Gustavo" }],
        Nuevatarea: ""
    },
    methods: {
        agregar() {
            this.tareas.push({
                tarea: this.Nuevatarea
            });
            // volvemos la nueva tarea en vacio para limpiar nuestro input
            this.Nuevatarea = "";
            localStorage.setItem("conacyt-tareas", JSON.stringify(this.tareas));
        },
        Borrar(index) {
            this.tareas.splice(index, 1);
            localStorage.setItem("conacyt-tareas", JSON.stringify(this.tareas));
        }
    },
    created() {
        let datosDB = JSON.parse(localStorage.getItem("conacyt-tareas"));
        if (datosDB == null) {
            this.tareas = [];
        } else {
            this.tareas = datosDB;
        }
    }
})