<template>
    <div class="container">
        <Title msg='AGREGA UN NUEVO JUGADOR' />
        <form @submit.prevent="createUserAction({nombre:nombre, apellido:apellido, edad:edad, email:email, phone:phone})">
            <label for="">Nombre</label>
            <input 
            type="text" 
            placeholder="Nombre" 
            v-model="nombre"
            required>

            <label for="">Apellido</label>
            <input 
            type="text" 
            placeholder="Apellido" 
            v-model="apellido"
            required>

            <label for="">Edad</label>
            <input
            type="number" 
            placeholder="Edad" 
            min="0"
            v-model.number="edad" 
            required>

            <label for="">Email</label>
            <input 
            type="email" 
            placeholder="Email" 
            v-model="email"
            required>

            <label for="">Teléfono</label>
            <input 
            type="number" 
            placeholder="Teléfono" 
            min="0" 
            v-model.number="phone"
            required>

            <div class="btns">
                    <button type="submit" class="btn add">Agregar</button>
                    <router-link to="/users">
                        <button class="btn cancel">Cancelar</button>
                    </router-link>
            </div>
        </form>
    </div>

</template>

<script>
import Title from "@/components/Title.vue"
import { mapActions } from "vuex"

export default {
    name: 'Add',
    components: {
        Title
    },
    data(){
        return{
            nombre: '',
            apellido: '',
            edad: 0,
            email: '',
            phone: 0
        }
    },

    methods: {
        ...mapActions(['createUserAction','updateUserActionCancel'])
    }
}
</script>

<style scoped>
    .container {
        margin: 0 auto;
    }

    form {
        width: 300px;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid rgba(0, 0, 0, 0.5);
        padding: 10px;
    }

    input {
        height: 30px;
        margin-bottom: 30px;
        padding-left: 15px;
    }

    .btns {
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .btn {
        width: 120px;
        height: 30px;
        border: 1px solid rgba(0, 0, 0, 0.7);
        border-radius: 5px;
        outline: none;
    }

    .add:hover {
        cursor: pointer;
        background:green;
        color: white;
        transition: 0.8s;
    }

    .cancel:hover {
        cursor: pointer;
        background: blueviolet;
        color: white;
        transition: 0.8s;
    }

    label {
        color: blue;
    }
</style>