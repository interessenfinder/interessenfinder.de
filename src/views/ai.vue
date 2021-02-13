<template>
    <div id="app">
        <h1>Interesse Hinzufügen</h1>
        <strong>Momentan speichert dies noch nix.</strong><br><br>
        <form>
            <label for="name">Bezeichnung: </label>
            <input ref="name" type="text" id="name" name="name"><br><br>
            <label for="description">Beschreibung: </label>
            <input ref="description" type="text" id="description" name="description"><br><br>
            <label for="indoor">Innerhalb geschlossener Räume möglich: </label>
            <input ref="indoor" type="checkbox" id="indoor" name="indoor" value="indoor"><br><br>
            <label for="allone">Innerhalb geschlossener Räume möglich: </label>
            <input ref="allone" type="checkbox" id="allone" name="allone" value="allone"><br><br>
            <button id="btnSummit" @click.prevent="getFormValues()">Einreichen</button>
        </form>
    </div>
</template>
//TODO: get html content in a json file 
<script>
export default {
    methods: {
    getFormValues () {
      console.log(this.$refs.name.value)
      console.log(this.$refs.description.value)
      console.log(this.$refs.indoor.checked)
      console.log(this.$refs.allone.checked)
    }
  }
};
</script>

<style scoped>
* {
    text-align: center;
    margin-right: auto;
    margin-left: auto;
}
</style>