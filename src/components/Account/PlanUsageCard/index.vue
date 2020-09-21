<template>
  <div class="customer-info-card">
    <p class="customer-info-card__header">
      {{ title }}
    </p>
    <p class="customer-info-card__info">
      {{ description }}
    </p>
    <p class="customer-info-card__plan-info">
      {{ subtitle }}
    </p>
    <el-button
      type="primary"
      size="small"
      class="customer-info-card__button"
      round
    >
      Upgrade
    </el-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'PlanUsageCard'
})
export default class extends Vue {
  @Prop({ default: false }) private isActive!: boolean
  @Prop() private title!: string
  @Prop() private description!: string
  @Prop() private subtitle!: string

  private toggleClick() {
    this.$emit('toggleClick')
  }
}
</script>

<style lang="scss" scoped>
.customer-info-card {
  border: 1px solid $lightGray;
  border-radius: $smallCardBorderRadius;
  position: relative;

  text-align: center;

  min-width: 180px;
  max-height: 240px;

  padding-bottom: 16px;

  margin-right: 32px;
  margin-bottom: 16px;

  &__header {
    color: $darkGray;
    font-weight: 700;
    text-transform: uppercase;
  }

  &__info {
    color: $light-blue;
    font-size: 24px;
    font-weight: 700;
  }

  &__plan-info {
    font-style: italic;
    color: $darkGray;
  }

  &__button {
    position: absolute;
    bottom: -13%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 6px;
    padding-bottom: 6px;
  }
}
</style>
