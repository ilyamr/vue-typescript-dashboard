<template>
  <div class="dashboard-wrapper">
    <div class="form-container white">
      <div class="company-name-container">
        <h1 class="company-name-container__name">
          Egoditor GmbH
        </h1>
        <div class="company-name-container__edit">
          Edit
          <i class="el-icon-edit" />
        </div>
      </div>
    </div>

    <div class="form-container">
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="Account"
          name="account"
        >
          <el-row :gutter="56">
            <el-col
              :xs="24"
              :sm="24"
              :md="24"
              :lg="8"
              :xl="8"
            >
              <el-card class="box-card">
                <h2 class="info-header">
                  Information
                </h2>

                <el-row :gutter="8">
                  <el-col :span="8">
                    <div class="customer-info-block">
                      <div class="customer-info-block__header">
                        Customer ID
                      </div>
                      <div class="customer-info-block__description">
                        {{ userContactForm.customerId }}
                      </div>
                    </div>
                  </el-col>

                  <el-col :span="8">
                    <div class="customer-info-block">
                      <div class="customer-info-block__header">
                        Signup Date
                      </div>
                      <div class="customer-info-block__description">
                        {{ userContactForm.signupDate }}
                      </div>
                    </div>
                  </el-col>

                  <el-col :span="8">
                    <div class="customer-info-block">
                      <p class="customer-info-block__header">
                        Account
                      </p>
                      <p class="customer-info-block__description">
                        {{ userContactForm.accountType }}
                      </p>
                    </div>
                  </el-col>
                </el-row>

                <div class="customer-info-block customer-info-block--large">
                  <div class="customer-info-block__wrapper">
                    <p class="customer-info-block__header">
                      Login Email
                    </p>
                    <p class="customer-info-block__description">
                      {{ userContactForm.email }}
                    </p>
                  </div>
                  <div class="customer-info-block__links">
                    <p class="customer-info-block__link">
                      <a href="#">Password</a>
                    </p>
                    <p class="customer-info-block__link">
                      <a href="#">Change Email</a>
                    </p>
                  </div>
                </div>

                <br>

                <h2 class="info-header info-header--no-margin-bottom">
                  Primary Contact
                </h2>
                <div class="description-text">
                  Please provide your contact information below. To change your contact info please click 'Save'
                </div>

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

                  <el-row :gutter="20">
                    <el-col :span="16">
                      <el-form-item label="City">
                        <el-input v-model="userContactForm.address.city" />
                      </el-form-item>
                    </el-col>
                    <el-col :span="8">
                      <el-form-item label="Zip Code">
                        <el-input v-model="userContactForm.address.zipCode" />
                      </el-form-item>
                    </el-col>
                  </el-row>

                  <el-form-item label="Country">
                    <el-select
                      v-model="userContactForm.address.country"
                      placeholder="please select your zone"
                    >
                      <el-option
                        label="Germany"
                        value="Germany"
                      />
                      <el-option
                        label="Spain"
                        value="Spain"
                      />
                      <el-option
                        label="Other"
                        value="Other"
                      />
                    </el-select>
                  </el-form-item>
                  <el-form-item label="Website">
                    <el-input v-model="userContactForm.website" />
                  </el-form-item>
                  <el-form-item class="align-right">
                    <el-button
                      type="primary"
                      round
                      class="btn-save"
                      @click="onSubmit"
                    >
                      SAVE
                    </el-button>
                  </el-form-item>
                </el-form>
              </el-card>
            </el-col>

            <div class="usage-info-container">
              <el-col
                :xs="24"
                :sm="24"
                :md="24"
                :lg="16"
                :xl="16"
              >
                <h2 class="info-header">
                  Usage
                </h2>

                <div class="customer-info-cards-wrapper">
                  <PlanUsageCard
                    v-for="item in userContactForm.usageStats"
                    :key="item.id"
                    :title="item.title"
                    :description="item.description"
                    :subtitle="item.subtitle"
                  />
                </div>

                <h2 class="info-header">
                  Who are you?
                </h2>
                <p>For the best possible experience, please let us know who you are</p>

                <!-- TODO Create component, get types from API -->
                <div class="customer-type-container">
                  <div
                    v-for="item in companyDescriptions"
                    :key="item.title"
                    class="customer-type-card"
                  >
                    <div class="customer-type-card__icon">
                      <i :class="'big-icon ' + item.icon" />
                    </div>
                    <div class="customer-type-card__name">
                      {{ item.title }}
                    </div>
                  </div>
                </div>
              </el-col>
            </div>
          </el-row>
        </el-tab-pane>
        <el-tab-pane
          label="Settings"
          name="settings"
        >
          Settings
        </el-tab-pane>
        <el-tab-pane
          label="User Management"
          name="userManagement"
        >
          User Management
        </el-tab-pane>
        <el-tab-pane
          label="White Label"
          name="whiteLabel"
        >
          White Label
        </el-tab-pane>
        <el-tab-pane
          label="API Keys"
          name="apiKeys"
        >
          API Keys
        </el-tab-pane>
        <el-tab-pane
          label="Billing"
          name="billing"
        >
          Billing
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import '@/styles/_variables.scss'

import { mapState, mapGetters } from 'vuex'
import { Component, Vue } from 'vue-property-decorator'

import { getUserInfo, updateUserInfo } from '@/api/users'

import { IUserState, UserModule } from '@/store/modules/User/User'

import PlanUsageCard from '@/components/Account/PlanUsageCard/index.vue'

// TODO: API request
const COMPANY_DESCRIPTIONS = [
  {
    title: 'Business',
    icon: 'el-icon-suitcase'
  },
  {
    title: 'Agency',
    icon: 'el-icon-house'
  },
  {
    title: 'NonProfit',
    icon: 'el-icon-star-off'
  },
  {
    title: 'Educational',
    icon: 'el-icon-collection'
  },
  {
    title: 'Private',
    icon: 'el-icon-coordinate'
  }
]

@Component({
  name: 'Form',
  components: {
    PlanUsageCard
  }
})
export default class extends Vue {
  private isLoading: Boolean = false;

  private activeName: string = 'account';
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
    website: '',

    customerId: '',
    accountType: '',
    signupDate: '',

    usageStats: {
      scansNumber: 0,
      scansPlan: 0,

      dynamicCodesNumber: 0,
      dynamicCodesPlan: 0,

      statucCodesNumber: 0,
      staticCodesPlan: 0,

      usersNumber: 0,
      usersNumberPlan: 0
    },

    accountIndustry: ''
  };

  private companyDescriptions = COMPANY_DESCRIPTIONS;

  private async onSubmit() {
    await updateUserInfo(this.userContactForm)
    this.$message('Contact info updated!')
  }

  private async fetchUserInfo() {
    this.isLoading = true
    const { data } = await getUserInfo({})
    this.userContactForm = JSON.parse(JSON.stringify(data.user))
    this.isLoading = false

    console.log(data)
  }

  created() {
    this.fetchUserInfo()
    // this.userContactForm = JSON.parse(JSON.stringify(this.$store.state.user.details))
  }

  // computed: {
  //   ...mapGetters(
  //     userDetails: 'user/user.details'
  //   )
  // }
}
</script>

<style lang="scss" scoped>

.align-right {
  text-align: right;
}

.line {
  text-align: center;
}

.dashboard-wrapper {
  background-color: #F5F8FA;
}

.form-container{
  // padding: 28px 84px;

  &.white {
    background-color: #fff;
    padding-left: $dashboardPaddingLeft;
    padding-right: $dashboardPaddingRight;
    padding-top: 28px;
    padding-bottom: 12px;

  }
}

.company-name-container {

  display: flex;
  align-items: center;

  &__name {
    font-size: 2.75em;
    color: $darkBlue;
    font-weight: 800;
  }

  &__edit {
    // margin-bottom: 16px;
    margin-left: 20px;

    color: $blue;
    font-weight: 700;

    i {
      color: $colorPrimary;
    }

    &:hover {
      cursor: pointer;
    }
  }
}

.info-header {
  color: $darkBlue;
  font-size: 1.8em;

  &--no-margin-bottom {
    margin-bottom: 0;
  }
}

.description-text {
  color: $darkGray;
  // font-size: 0.8em;
  font-weight: 600;
  margin-top: 8px;
  margin-bottom: 24px;
}

.box-card{
  border-radius: $bigCardBorderRadius;
  padding: 0 12px;
  padding-top: 0;

  &--small {
    border-radius: $smallCardBorderRadius;
  }
}

.customer-info-block {
  border: 0.5px solid $borderColor;;
  border-radius: $smallCardBorderRadius;
  font-weight: 700;

  min-height: 100px;
  min-width: 120px;

  text-align: center;

  padding: 0 20px;
  margin-bottom: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__header{
    color: $lightGray;
    text-transform: uppercase;
    font-size: 0.8em;
    margin-bottom: 12px;
  }

  &__description {
    color: $light-blue;
    font-size: 1.2em;
  }

  &__link {
    color: $blue;
    font-size: 0.8em;
  }

  &--large {
    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-direction: row;
    flex-wrap: wrap;

    .customer-info-block__wrapper {
      text-align: left;
    }

    .customer-info-block__links {
      text-align: right;
    }

    a {
      display: block;
    }

  }
}

.customer-info-cards-wrapper {
  display: flex;
  flex-wrap: wrap;
}

// .customer-info-card {
//   border: 1px solid $lightGray;
//   border-radius: $smallCardBorderRadius;
//   position: relative;

//   text-align: center;

//   min-width: 180px;
//   max-height: 240px;

//   padding-bottom: 16px;

//   margin-right: 32px;
//   margin-bottom: 16px;

//   &__header {
//     color: $darkGray;
//     font-weight: 700;
//     text-transform: uppercase;
//   }

//   &__info {
//     color: $light-blue;
//     font-size: 24px;
//     font-weight: 700;
//   }

//   &__plan-info {
//     font-style: italic;
//     color: $darkGray;
//   }

//   &__button {
//     position: absolute;
//     bottom: -13%;
//     left: 50%;
//     transform: translate(-50%, -50%);

//     font-weight: 700;
//     text-transform: uppercase;
//     font-size: 12px;
//     padding-right: 10px;
//     padding-left: 10px;
//     padding-top: 6px;
//     padding-bottom: 6px;
//   }
// }

.btn-save {
  font-weight: 700;
  font-size: 1.25em;
}

.customer-type-container {
  display: flex;
  flex-wrap: wrap;
}

.customer-type-card {
  text-align: center;
  cursor: pointer;

  background-color: #fff;
  border-radius: $bigCardBorderRadius;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);

  width: 140px;
  height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  text-transform: uppercase;
  color: $light-blue;
  font-weight: 700;

  margin-right: 28px;
  margin-bottom: 12px;

  &:hover {
    background-color: #f7f7f7;;
  }

  &__icon > i {
    font-size: 2.5em;
    color: $colorPrimary;
    font-weight: 700;
    margin-bottom: 12px;
  }

}

@media only screen and (max-width: 1024px) {
  .customer-type-container {
    justify-content: center;
    align-items: center;
  }

  .customer-info-cards-wrapper{
    justify-content: center;
    align-items: center;
  }

  .usage-info-container {
    text-align: center;
  }

  .form-container.white {
    padding-left: 10%;
    padding-right: 10%;
    text-align: center;
  }

  .company-name-container__name {
    font-size: 1.6em;
  }
}

</style>
