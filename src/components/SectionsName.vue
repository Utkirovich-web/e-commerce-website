<template>
  <div class="section-header-wrapper">
    <div class="section-name">
      <div>
        <div class="rectangle-wrapper">
          <div class="rectangle"></div>
          <p>
            <slot name="section">Default Section</slot>
          </p>
        </div>
        <h2>
          <slot name="title"></slot>
        </h2>
      </div>
      <slot name="timer"></slot>
    </div>

    <div><slot name="button"></slot></div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.section-header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  // margin-bottom: 4rem;
  width: 100%;
}

.section-name {
  display: flex;
  align-items: end;
  gap: 8rem;
}

.rectangle-wrapper {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.4rem;
}
.rectangle {
  border-radius: 0.5rem;
  background-color: #db4444;
  width: 2rem;
  height: 4rem;
}

p {
  color: #db4444;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2rem;
}

h2 {
  color: #000;
  font-weight: 600;
  font-size: 3.6rem;
  line-height: 4.8rem;
}
</style>
