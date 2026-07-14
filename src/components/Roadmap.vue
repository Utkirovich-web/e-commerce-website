<template>
  <nav class="roadmap">
    <div class="roadmap-container">
      <slot></slot>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.roadmap {
  margin-block: 8rem;

  .roadmap-container {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    flex-wrap: wrap;

    :deep(a),
    :deep(.separator) {
      color: #00000080;
      text-decoration: none;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.1rem;
      transition: color 0.2s ease;

      &:hover {
        color: #000000;
      }
    }

    :deep(.current) {
      color: #000000;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2.1rem;
    }
  }
}
</style>
