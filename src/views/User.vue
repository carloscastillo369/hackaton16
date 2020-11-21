<template>
    <div>
        <Title msg="Información del usuario:"/>
        <Table/>
    </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Table from "@/components/Table.vue";

export default {
    name: 'User',
    components: {
        Table,
        Title
    }
}
</script>

<style scoped>


</style>