<template>
    <div id="app">
        <h1>Interesse Hinzufügen</h1>
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
      var name = this.$refs.name.value
      var description = this.$refs.description.value
      var indoor = this.$refs.indoor.checked
      if(indoor){
        indoor = 'Ja'
      }else{
        indoor = 'Nein'
      }
      var allone = this.$refs.allone.checked
      if(allone){
        allone = 'Ja'
      }else{
        allone = 'Nein'
      }
      console.log(name)
      console.log(description)
      console.log(indoor)
      console.log(allone)
      this.saveToFile(name, description, indoor, allone)
    },
    saveToFile(nam, descriptio, isAllone, isIndoor) {
      /*
      
      */
     var details = {
       'name': nam,
       'description': descriptio,
       'allone': isAllone,
       'indoor': isIndoor
     }
     var formBody = [];
     for (var property in details) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(details[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", "Access-Control-Allow-Origin": "*"},
        body: formBody
  };
  fetch("https://api.interessenfinder.de/data", requestOptions)
    .then((response) => response.json())
      .then((responseData) => {
         alert(JSON.stringify(responseData))
    })
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