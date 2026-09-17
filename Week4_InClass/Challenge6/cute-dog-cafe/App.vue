<template>
  <div id="app">
    <h1>🐶 Krazy Dog Café</h1>

    <ol>
      <li v-for="(dog, index) in dogs" :key="index">
        {{ capitalize(dog.name) }} is {{ dog.age }} year{{ dog.age === 1 ? '' : 's' }} old
      </li>
    </ol>

    <p>
      Dog Name: <input type="text" v-model="newDogName">
    </p>
    <p>
      Dog Age: <input type="number" v-model="newDogAge">
    </p>

    <button @click="addDog">Add Dog</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      dogs: [
        { name: 'Healthy', age: 3 },
        { name: 'Smiley', age: 7 },
        { name: 'Happy', age: 1 }
      ],
      newDogName: '',
      newDogAge: ''
    };
  },
  methods: {
    capitalize(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    addDog() {
      if (this.newDogName === '' || this.newDogAge === '') {
        return;
      }

      this.dogs.push({
        name: this.newDogName,
        age: parseInt(this.newDogAge)
      });

      this.newDogName = '';
      this.newDogAge = '';
    }
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}
</style>
