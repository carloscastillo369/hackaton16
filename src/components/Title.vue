<template>
    <div>
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
export default {
    name: 'Title',
    props: {
        msg: String
    }

}
</script>

<style scoped>
    h2 {
        color: darkblue;
        font-size: 30px;
        text-decoration: underline black;
        margin: 40px 0;
    }

</style>