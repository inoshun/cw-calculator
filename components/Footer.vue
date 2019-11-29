<template>
  <footer id="footer">
    <p>Created by inoshun</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: $gray;

  p {
    font-size: 18px;
    color: white;
  }
}

@media screen and (max-width: 768px) {
  footer {
    height: 40px;

    p {
      font-size: 13px;
    }
  }
}
</style>