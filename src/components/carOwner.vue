<template>
  <div>
    <div class="test">
      <canvas id="test-canvas" width="700" height="700" ref="canvas">
        <p>你的浏览器不支持Canvas</p>
      </canvas>
      <img style="height: 0" ref="photo" src="../assets/tutu.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'carOwner',
  data () {
    return {
      rad: null,
      speed: null,
      time: null
    }
  },
  mounted () {
    this.show()
  },
  destroyed () {
    clearInterval(this.time)
  },
  methods: {
    show () {
      this.canvas = this.$refs.canvas
      this.context = this.canvas.getContext('2d')
      // 将360度分成100份，那么每一份就是rad度
      this.rad = Math.PI * 2 / 360
      this.speed = 1
      this.time = setInterval(this.animation, 10)
    },
    animation () {
      if (this.speed > 360) {
        clearInterval(this.time)
      }
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.context.drawImage(this.$refs.photo, 94, 198, 512, 303)
      this.outside(this.canvas.width / 2, this.canvas.height / 2)
      this.blueside(this.speed, this.rad, this.canvas.width / 2, this.canvas.height / 2)
      this.ball(this.speed, this.rad, this.canvas.width / 2, this.canvas.height / 2)
      this.text(this.speed, this.rad, this.canvas.width / 2, this.canvas.height / 2)
      this.speed += 1
    },
    outside (centerX, centerY) {
      this.context.save()
      this.context.beginPath()
      this.context.lineWidth = 2
      this.context.strokeStyle = '#DDDDDD'
      this.context.arc(centerX, centerY, 325, 0, Math.PI * 2, false)
      this.context.stroke()
      this.context.closePath()
      this.context.restore()
    },
    blueside (n, rad, centerX, centerY) {
      this.context.save()
      this.context.strokeStyle = '#2932D3'
      this.context.lineWidth = 3
      this.context.beginPath()
      this.context.arc(centerX, centerY, 325, -Math.PI / 2, -Math.PI / 2 + n * rad, false)
      this.context.stroke()
      this.context.closePath()
      this.context.restore()
    },
    ball (n, rad, centerX, centerY) {
      this.context.save()
      this.context.fillStyle = '#2932D3'
      this.context.beginPath()
      this.context.arc(centerX + 325 * Math.sin(n * rad), 25 + 325 - 325 * Math.cos(n * rad), 25, 0, Math.PI * 2, false)
      this.context.closePath()
      this.context.fill()
      this.context.restore()
    },
    text (n, rad, centerX, centerY) {
      this.context.save()
      this.context.strokeStyle = '#fff'
      this.context.font = '20px Avenir'
      this.context.textAlign = 'center'
      this.context.textBaseline = 'middle'
      this.context.strokeText('1', centerX + 325 * Math.sin(n * rad), 25 + 325 - 325 * Math.cos(n * rad))
      this.context.stroke()
      this.context.restore()
    }
  }
}
</script>

<style scoped>
</style>
