<template>
    <div>
        <Title msg="Editar el Usuario"/>
        <Formulario/>
    </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Formulario from "@/components/Formulario.vue";

export default {
    name: 'Edit',
    components: {
        Formulario,
        Title
    }

}
</script>

<style>

</style>