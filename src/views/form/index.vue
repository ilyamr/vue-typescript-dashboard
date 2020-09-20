<template>
  <div class="form-container">
    <div class="name-editor">
      <h1>Egoditor GmbH</h1>
      <!-- <div class="name-editor__button">
        Edit
      </div> -->
    </div>

    <el-row :gutter="32">
      <el-col
        :xs="24"
        :sm="12"
        :md="8"
        :lg="8"
        :xl="8"
      >
        <div class="grid-content bg-purple" />

        <h2 class="info-header">
          Information
        </h2>

        <div class="customer-info-block">
          <p class="customer-info-block__header">
            Customer ID
          </p>
          <p class="customer-info-block__description">
            app-u-103
          </p>
        </div>

        <h2 class="info-header">
          Primary Contact
        </h2>
        <p>Plese provide your contact information below. To change your contact info click 'Save'</p>

        {{ userContactForm }}
        <el-form
          ref="userContactForm"
          v-loading="isLoading"
          :model="userContactForm"
          label-width="20px"
          label-position="top"
        >
          <el-form-item label="First Name">
            <el-input v-model="userContactForm.firstName" />
          </el-form-item>
          <el-form-item label="Last Name">
            <el-input v-model="userContactForm.lastName" />
          </el-form-item>
          <el-form-item label="Phone Number">
            <el-input v-model="userContactForm.phoneNumber" />
          </el-form-item>
          <el-form-item label="Company">
            <el-input v-model="userContactForm.company" />
          </el-form-item>
          <el-form-item label="Street">
            <el-input v-model="userContactForm.address.street" />
          </el-form-item>
          <el-form-item label="City">
            <el-input v-model="userContactForm.address.city" />
          </el-form-item>
          <el-form-item label="Zip Code">
            <el-input v-model="userContactForm.address.zipCode" />
          </el-form-item>
          <el-form-item label="Country">
            <el-select
              v-model="userContactForm.address.country"
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
            <el-input v-model="userContactForm.website" />
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
        <div class="grid-content bg-purple-light" />
        <h2 class="info-header">
          Usage
        </h2>
        <div class="customer-info-card">
          <p class="customer-info-card__header">
            Scans
          </p>
          <p class="customer-info-card__info">
            3451244
          </p>
          <p class="customer-info-card__plan-info">
            Unlimited
          </p>
          <button class="btn btn-small btn-action">
            Upgrade
          </button>
        </div>

        <h2 class="info-header">
          Who are you?
        </h2>
        <p>For the best possible experience, please let us know who you are</p>
        <div class="customer-type-wrapper">
          <div class="customer-type-wrapper__icon" />
          <div class="customer-type-wrapper__name">
            Business
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import { Component, Vue } from 'vue-property-decorator'

import { getUserInfo, updateUserInfo } from '@/api/users'

import { IUserState, UserModule } from '@/store/modules/User/User'

@Component({
  name: 'Form'
})
export default class extends Vue {
  private isLoading: Boolean = false;
  // private userContactForm: Object = {};

  // private userDetails: IUserState = userContactForm;

  private userContactForm = {
    firstName: 'fas',
    lastName: '',
    phoneNumber: '',
    company: '',
    address: {
      street: '',
      city: '',
      zipCode: '',
      country: ''
    },
    website: ''
  };

  private onSubmit(): void {
    this.$message('submit!')
  }

  private async fetchUserInfo() {
    this.isLoading = true
    const { data } = await getUserInfo({})
    this.userContactForm = JSON.parse(JSON.stringify(data.user))
    this.isLoading = false
  }

  created() {
    this.fetchUserInfo()
    // this.userContactForm = JSON.parse(JSON.stringify())
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
