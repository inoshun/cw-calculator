<template>
  <header id="header">
    <h1 class="alata">CW Calc</h1>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: $blue;

  h1 {
    text-align: center;
    font-size: 38px;
    color: white;
  }
}

@media screen and (max-width: 768px) {
  header {
    height: 50px;

    h1 {
      font-size: 20px;
    }
  }
}
</style>
