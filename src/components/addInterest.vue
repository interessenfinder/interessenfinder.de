<template>
    <div id="app">
        <h1>test</h1>
        <form>
            <label for="name">Bezeichnung: </label>
            <input type="text" id="name" name="name"><br><br>
            <label for="description">Beschreibung: </label>
            <input type="text" id="description" name="description"><br><br>
            <label for="indoor">Innerhalb geschlossener Räume möglich: </label>
            <input type="checkbox" id="indoor" name="indoor" value="indoor"><br><br>
            <label for="allone">Innerhalb geschlossener Räume möglich: </label>
            <input type="checkbox" id="allone" name="allone" value="allone"><br><br>
            <input type="submit" value="Einreichen">
        </form>
    </div>
</template>
//TODO: get html content in a json file 
<script>
export default {
  name: 'addInterest',
}
</script>

<style scoped>
* {
    text-align: center;
    margin-right: auto;
    margin-left: auto;
}
</style>