<template>
    <div>

        <h1 class="uk-h1 tm-heading-fragment">Usage</h1>
        <h3 class="subtitle">Basic Concept</h3>
           
        <p>The idea behind the ET Form is that it should be easy to implement, since the syntax is almost the same as in HTML.</p>
        <CodeView title="The diff" :code="syntax | pre" lang="html" expanded/>

        <p>All other supported input types are done in a similar fashion: adding 'et-' in front of the input html element converts it to a field that shall be captured by the ET Form, and data sent to our API.</p>
        <p>Please refer to the documentation for details about other input types.</p>

        <h3 class="subtitle">Pages</h3>
        <p>A form with way too many inputs may look scary, therefore we break the questionarre into pages like so:</p>
        <CodeView title="Pager" :code="pager | pre" lang="html" expanded/>
        <p>The ET App code automatically adds pages, a pager, depending on your input, forms get it's shape and you can add whatever custom HTML elements to the process of filling the form, for example:</p>
        <ul>
          <li>H3 text title related to the section</li>
          <li>Page related titles and explanation</li>
          <li>A paragraph text explaining what the user should enter, e.g. please add your demo video link to the following input field</li>
          <li>An image to break up some long forms, or simply just to engage your users</li>
          <li>Notes about what the user can expect as a bonus if they fill up the following section since let's say it was not obligatory</li>
        </ul>

        <p>Note that any ET Form must start with <code>&lt;&#47;et-form&gt;</code>, end with <code>&lt;&#47;et-form&gt;</code> and contain at least one page wrapper <code>&lt;et-page&gt;&lt;&#47;et-page&gt;</code>:</p>
        <CodeView title="Simplest working ET App Form" :code="simple | pre" lang="html" expanded/>
        <p>The ET app code automatically switches the pager off, and shows a submit button instead of the 'Next' button.</p>

        <h3>Data structuring for later analysis</h3>
        <p>An input form must serve its's purpose. Therefore, we must add some tags to the input fields so we know what to do with it later.</p>
        <p>The ET App Form solves this the following way: all input names, since they are already unique, also must contain some specific naming conventions.</p>
        <ol>
          <li>For categorization purposes, the name must end with the following:</li>
            <ul>
              <li>_personal</li>
              <li>_contact</li>
              <li>_business</li>
              <li>_other</li>
            </ul>
          <li>The naming convention of the input name variable is standardized, so we know what that input should be. The exception is of course the _other tagged data input type. Some valid <code>name="valid_input_name_goes_here"</code>examples follow:</li>
          <ul>
              <li>last_name_personal</li>
              <li>first_name_personal</li>
              <li>email_contact</li>
              <li>address_contact</li>
              <li>city_contact</li>
              <li>business_address_contact</li>
              <li>business_city_contact</li>
              <li>some_data_you_might_want_other</li>
            </ul>
        </ol>

        <h3>Wrapping it all up</h3>
        <p>After familiarizing ouselves with some basic concepts, let's make an example ET App Form using what we learned.</p>
        <CodeView title="Wrapping it all up - our first ET App Form" :code="wrap | pre" lang="html" expanded/>

        <h2>Working example</h2>
        <p>The followig is the working example of the wrap up code limited by horizontal lines.</p>
        <hr/>
        <et-form>
          <et-page>
            <h4>Personal data</h4>
            <et-field label="First name">
              <et-input name="first_name_personal"></et-input>
            </et-field>
            <et-field label="Last name">
              <et-input type="text" name="last_name_personal"></et-input>
            </et-field>
            <et-field
              label="Business email">
              <et-input
                type="email"
                value=""
                name="email_business"
                maxlength="30">
              </et-input>
            </et-field>
          </et-page>
          <et-page>
            <h4>Business data</h4>
            <et-field label="Bussiness model description">
              <et-input
                type="textarea"
                name="model_description_business"
                maxlength="1000"
                placeholder="Please enter the description of the business model you use">
              </et-input>
            </et-field>
          </et-page>
        </et-form>
        <hr/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                syntax: `
                <!-- HTML -->
                <input type="text" name="first_name_personal">
                <!-- ET Form -->
                <et-input type="text" v-model="name" name="first_name_personal"></et-input>
                `,
                pager: `
                <et-form>
                  <et-page>
                    First name
                    <et-input type="text" v-model="first_name" name="first_name_personal"></et-input>
                  </et-page>
                  <et-page>
                    Last name
                    <et-input type="text" v-model="last_name" name="last_name_personal"></et-input>
                  </et-page>
                </et-form>
                `,
                simple: `
                <et-form>
                  <et-page>
                    First name
                    <et-input type="text" v-model="first_name" name="first_name_personal"></et-input>
                    Last name
                    <et-input type="text" v-model="last_name" name="last_name_personal"></et-input>
                  </et-page>
                </et-form>
                `,
                wrap: `
                <et-form>
                  <et-page>
                    <h4>Personal data</h4>
                    <et-field label="First name">
                      <et-input name="first_name_personal"></et-input>
                    </et-field>
                    <et-field label="Last name">
                      <et-input type="text" name="last_name_personal"></et-input>
                    </et-field>
                    <et-field
                      label="Business email">
                      <et-input
                        type="email"
                        value=""
                        name="email_business"
                        maxlength="30">
                      </et-input>
                    </et-field>
                  </et-page>
                  <et-page>
                    <h4>Business data</h4>
                    <et-field label="Bussiness model description">
                      <et-input
                        type="textarea"
                        name="model_description_business"
                        maxlength="1000"
                        placeholder="Please enter the description of the business model you use">
                      </et-input>
                    </et-field>
                  </et-page>
                </et-form>
                `,
            }
        }
    }
</script>