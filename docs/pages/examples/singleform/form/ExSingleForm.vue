<template>
  <div>
    <!-- init the ET Form -->
    <et-form name="7"> <!-- the form name is the form ID -->
      <!-- first page -->
      <et-page>
        <!-- Add a page title in plain HTML if any -->
        <h1>ET App Form single page example</h1>
        <h5>If you'd like to work with us, answer the questions below and we'll be in touch.</h5>


        <!-- <et-field label="Enter your work email address">
          <et-autocomplete
              rounded
              :data="filteredDataArray"
              placeholder="e.g. jQuery"
              icon="magnify"
              @select="option => selected = option">
              <template slot="empty">No results found</template>
          </et-autocomplete>
        </et-field> -->

        <et-field grouped>
          <et-field label="Enter your first name" expanded>
            <et-input
                name="first_name_personal"
                pattern="[a-zA-Z ]*"
                maxlength="30"
                required>
            </et-input>
            <p class="et-input-sub">Characters accepted are a-z and space.</p>
          </et-field>

          <et-field label="Enter your last name" expanded>
            <et-input
                type="text"
                name="last_name_personal"
                pattern="[a-zA-Z ]*"
                maxlength="30"
                required>
            </et-input>
            <p class="et-input-sub">Characters accepted a-z and space.</p>
          </et-field>
        </et-field>

        <et-field label="Enter your work email address">
          <et-input
            type="email"
            value=""
            name="email_business"
            required
            maxlength="60">
          </et-input>
          <p class="et-input-sub">Standard email address formats accepted only.</p>
        </et-field>

        <et-field label="Company name">
            <et-input
                name="company_name_business"
                required
                maxlength="60">
            </et-input>
            <p class="et-input-sub">Enter your company name</p>
        </et-field>

        <et-field label="I'm interested in..." expanded>
            <et-select
              placeholder="Please select area of interest"
              name="interested_in_business"
              required
              expanded
            >
                <option value="Explore - General">
                    Explore - General
                </option>
                <option value="Signals POVs">
                    Signals® POVs
                </option>
                <option value="Opportunity Landscapes">
                    Opportunity Landscapes
                </option>
                <option value="Tours of the Possible">
                    Tours of the Possible
                </option>
                <option value="Evaluate - General">
                    Evaluate - General
                </option>
                <option value="Curation &amp; Diligence">
                    Curation &amp; Diligence
                </option>
                <option value="Technology Sourcing &amp; Optimization">
                    Technology Sourcing &amp; Optimization
                </option>
                <option value="Digital Immersion">
                    Digital Immersion
                </option>
                <option value="Execute - General">
                    Execute - General
                </option>
                <option value="Prototype Sprints">
                    Prototype Sprints
                </option>
                <option value="Interplay Essentials">
                    Interplay Essentials
                </option>
                <option value="The Innovation Cloud">
                    The Innovation Cloud
                </option>
            </et-select>
        </et-field>

        <et-field label="Company Url">
            <et-input name="company_url_business"></et-input>
            <p class="et-input-sub">Enter your official website (with http:// or https://)</p>
        </et-field>

        <et-field label="Job title">
            <et-input name="job_title_business">
            </et-input>
            <p class="et-input-sub">Please enter your job title.</p>
        </et-field>

        <et-field label="Describe your company">
            <et-input
                type="textarea"
                max-length="1000"
                name="company_description_business"
                maxlength="1000"
                required>
            </et-input>
            <p class="et-input-sub">Please enter the brief description of your company; keep it short and sweet – grab attention.
            </p>
        </et-field>
      </et-page>
    <!-- close the ET Form -->
    </et-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
            'Angular',
            'Angular 2',
            'Aurelia',
            'Backbone',
            'Ember',
            'jQuery',
            'Meteor',
            'Node.js',
            'Polymer',
            'React',
            'RxJS',
            'Vue.js'
        ],
        name: ''
      }
    },
    computed: {
        filteredDataArray() {
            return this.data.filter((option) => {
                return option
                    .toString()
                    .toLowerCase()
                    .indexOf(this.name.toLowerCase()) >= 0
            })
        }
    }
  }
</script>
