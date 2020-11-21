<template>
    <div>
        <table>
            <thead>
                <tr class="row-head">
                    <th class="id">ID</th>
                    <th class="name">NAME</th>
                    <th class="username">USERNAME</th>
                    <th class="email">EMAIL</th>
                    <th class="phone">PHONE</th>
                    <th class="website">WEBSITE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{{user.id}}</th>
                    <td>{{user.nombre}}</td>
                    <td>{{user.apellido}}</td>
                    <td>{{user.edad}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.phone}}</td>
                    <td class="action">
                        <router-link 
                            :to="{name: 'Edit', params: {id: user.id}}"
                        >
                            <button class="btn edit">Mostrar</button>
                        </router-link>
                        <button @click="deleteUserAction(user.id)" class="btn delete">Borrar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapActions, mapState} from "vuex";

export default {
    name: 'TableUser',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getUserAction','deleteUserAction']),
    },
    computed: {
        ...mapState(['user'])
    },
    created(){
        this.getUserAction(this.id);
    }
}
</script>

<style>
    table {
        margin: auto;
        width: 1200px;
        height: 100px;
        background: skyblue;
    }

    .row-head {
        background: black;
        color: white;
        height: 40px;
        font-size: 13px;
    }
    
    .id {
        width: 40px;
    }

    .name {
        width: 180px;
    }

    .username {
        width: 180px;
    }

    .email {
        width: 220px;
    }

    .phone {
        width: 200px;
    }

    .website {
        width: 120px;
    }

    .action {
        height: 60px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .btn {
        width: 90px;
        height: 30px;
        border: 1px solid rgba(0, 0, 0, 0.7);
        border-radius: 5px;
        outline: none;
    }

    .edit:hover {
        cursor: pointer;
        background: blue;
        color: white;
        transition: 0.8s;
    }

    .delete:hover {
        cursor: pointer;
        background: red;
        color: white;
        transition: 0.8s;
    }
</style>