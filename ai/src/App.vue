<template>
    <div id="app">
        <navigation />
        <h1>Interesse einreichen</h1>
        <strong>BITTE BEACHTEN, diese Seite befindet sich noch im Aufbau, wahrscheiliches Veröffentlichungsdatum ist der 20.01.2021</strong> <br><br>
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
        <p>
          Bitte beachte, dass die Verarbeitung momentan manuell erfolgt und dementsprechend einige Zeit in Anspruch nehmen wird.
        </p>
    </div>
</template>
//TODO: get html content in a json file 
<script>
import navigation from "./components/nav";
export default {
  name: 'App',
  components: {
    navigation
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