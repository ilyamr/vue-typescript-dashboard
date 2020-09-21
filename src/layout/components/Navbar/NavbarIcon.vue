<template>
  <router-link
    :to="to"
  >
    <div class="navbar-icon">
      <i :class="iconClass" />
      <slot />
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'NavbarIcon'
})
export default class extends Vue {
  @Prop({ required: true }) private to!: string
  @Prop({ required: true }) private iconClass!: string
}
</script>

<style lang="scss" scoped>

.navbar-icon {
  display: flex;
  align-items: center;
   i {
    font-size: 1.6em;
    color: $colorPrimary;
    font-weight: 700;

    &:hover {
      color: $colorPrimaryHovered;

    }
  }
  // margin-left: 12px;
  // margin-right: 12px;
}

</style>
