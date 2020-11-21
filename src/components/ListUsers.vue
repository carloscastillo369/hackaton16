<template>
    <div>
        <Title msg="Lista de Usuarios"/>
        <router-link to="/add">
            <button>AGREGAR JUGADOR</button>
        </router-link>
        <ul>
            <li v-for="user in users" :key="user.id">
                <router-link 
                    :to="{name: 'User', params: {id: user.id}}"
                >
                    <ItemUser :firstLetter="user.nombre[0]" :name="user.nombre"/>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import ItemUser from "@/components/ItemUser.vue";
import Title from "@/components/Title.vue";
import { mapActions, mapState} from "vuex";

export default {
    name: 'ListUsers',
    components: {
        ItemUser,
        Title
    },
    methods: {
        ...mapActions(['getUsersAction'])
    },
    computed: {
        ...mapState(['users'])
    },
    created() {
        this.getUsersAction()
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    a {
        text-decoration: none;
    }

    button {
        width: 200px;
        height: 50px;
        border: unset;
        outline: none;
        background: white;
        border: 3px solid red;
        border-radius: 5px;
        font-weight: bold;
        color: red;
        position: relative;
        right: 40%;
    }

    button:hover {
        cursor: pointer;
        background: red;
        color: white;
    }

</style>