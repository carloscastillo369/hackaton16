<template>
    <div class="container">
        <form>
            <label for="">Nombre</label>
            <input type="text" placeholder="Nombre" :value="user.nombre">

            <label for="">Apellido</label>
            <input type="text" placeholder="Apellido" :value="user.apellido">

            <label for="">Edad</label>
            <input type="number" placeholder="Edad" :value="user.edad">

            <label for="">Email</label>
            <input type="email" placeholder="Email" :value="user.email">

            <label for="">Teléfono</label>
            <input type="number" placeholder="Teléfono" :value="user.phone">

            <div class="btns">
                <button class="btn update">Actualizar</button>
                <router-link :to="`/users/user/${user.id}`">
                    <button class="btn cancel">Cancelar</button>
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState} from "vuex";

export default {
    name: 'Formulario',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getUserAction'])
    },
    computed: {
        ...mapState(['user'])
    },
    created(){
        this.getUserAction(this.id);
    }
}
</script>

<style scoped>
    .container {
        margin: 70px auto;
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

    .update:hover {
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