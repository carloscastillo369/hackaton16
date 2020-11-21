<template>
    <div class="container">
        <h2>{{firstLetter}}</h2>
        <p>{{name}}</p>
    </div>
</template>

<script>
export default {
    name: 'ItemUser',
    props: {
        firstLetter:String,
        name: String
    }
}
</script>

<style scoped>
    
    h2 {
        font-size: 60px;
    }

    p {
        font-size: 15px;
    }

    .container {
        width: 170px;
        height: 170px;
        border: 4px solid orange;
        border-radius: 50%;
        color: rgba(77, 77, 199, 0.719);
        margin: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
    }
    
    .container:hover {
        cursor: pointer;
        background: orange;
        color: white;
        transition: 0.8s;
    }




</style>