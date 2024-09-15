<template>
  <div id="app">
    <header class="app-header">
      <h1>Secret Santa Gift Exchange</h1>
    </header>
    <main>
      <SecretSanta />
    </main>
    <footer class="app-footer">
      <div class="tree-container">
        <p>Created by Selvaganapathi Mani.</p>
      </div>
      <div class="snowfall"></div>
    </footer>
  </div>
</template>

<script>
import SecretSanta from './components/SecretSanta.vue';

export default {
  name: 'App',
  components: {
    SecretSanta
  }
};
</script>

<style>
html {
  background-color:rgb(209, 48, 67);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color:rgb(209, 48, 67);
  background-size: cover;
  margin: 0;
  padding: 0;
  height: 100vh;
}

.app-header {
  padding: 20px;
  color: white;
  position: relative;
}

.app-header h1 {
  margin: 0;
  font-size: 2em;
}

main {
  padding: 20px;
}

.app-footer {
  color: white;
  padding: 10px;
  position: relative;
  text-align: center;
}

.tree-container {
  position: relative;
}

.tree-image {
  width: 100px;
  height: auto;
}

.snowfall {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

footer p {
  margin: 10px 0;
  z-index: 1;
}
</style>
