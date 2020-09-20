<template>
  <div class="form-container">

    <div class="name-editor">
     <h1>Egoditor GmbH</h1>
      <!-- <div class="name-editor__button">
        Edit
      </div> -->
    </div>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
        <div class="grid-content bg-purple"></div>

        <h2 class="info-header">Information</h2>

          <div class="customer-info-block">
            <p class="customer-info-block__header">
              Customer ID
            </p>
            <p class="customer-info-block__description">
              app-u-103
            </p>
          </div>

        <h2 class="info-header">Primary Contact</h2>
        <p>Plese provide your contact information below. To change your contact info click 'Save'</p>

        <el-form
          ref="form"
          :model="form"
          label-width="20px"
          label-position="top"
        >
          <el-form-item label="First Name">
            <el-input v-model="form.firstName" />
          </el-form-item>
          <el-form-item label="Last Name">
            <el-input v-model="form.lastName" />
          </el-form-item>
          <el-form-item label="Phone Number">
            <el-input v-model="form.phoneNumber" />
          </el-form-item>
          <el-form-item label="Company">
            <el-input v-model="form.company" />
          </el-form-item>
          <el-form-item label="Street">
            <el-input v-model="form.street" />
          </el-form-item>
          <el-form-item label="City">
            <el-input v-model="form.city" />
          </el-form-item>
          <el-form-item label="Zip Code">
            <el-input v-model="form.zipCode" />
          </el-form-item>
          <el-form-item label="Country">
            <el-select
              v-model="form.country"
              placeholder="please select your zone"
            >
              <el-option
                label="Zone one"
                value="shanghai"
              />
              <el-option
                label="Zone two"
                value="beijing"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Website">
            <el-input v-model="form.website" />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit"
            >
              Save
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light"></div>
        <h2 class="info-header">Usage</h2>
        <div class="customer-info-card">
          <p class="customer-info-card__header">Scans</p>
          <p class="customer-info-card__info">3451244</p>
          <p class="customer-info-card__plan-info">Unlimited</p>
          <button class="btn btn-small btn-action">Upgrade</button>
        </div>


        <h2 class="info-header">Who are you?</h2>
        <p>For the best possible experience, please let us know who you are</p>
        <div class="customer-type-wrapper">
          <div class="customer-type-wrapper__icon"></div>
          <div class="customer-type-wrapper__name">Business</div>
        </div>

        </el-col>
    </el-row>


  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Form'
})
export default class extends Vue {
  private form = {
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: ''
  };

  private onSubmit() {
    this.$message('submit!')
  }
}
</script>

<style lang="scss" scoped>
.line {
  text-align: center;
}

.form-container{
  padding: 28px 56px;
}
</style>
