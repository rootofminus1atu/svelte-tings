<script>
  let mouse = { x: 0, y: 0 }

  function handleMouseMove(e) {
    console.log(e, mouse)
    mouse.x = e.clientX
    mouse.y = e.clientY
  }
  
</script>

<main style="height: 100vh;">
  <div on:mousemove={handleMouseMove}>
    The mouse position is ({mouse.x}, {mouse.y}) 
  </div>

</main>

<style>
  div {
    height: 100%;
    width: 100%;
  }
</style>
