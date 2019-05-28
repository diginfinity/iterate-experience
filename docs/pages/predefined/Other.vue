<template>
  <div>
    <h1>Other data types</h1>
    <h4>Predefined naming types are used for data identification and classification.</h4>
    <p>If you are not familiar with this concept, please check the <router-link to="/documentation/usage">Usage</router-link> page for starters.</p>

    <h3>Supported prefixes for <i>_other</i> input name types</h3>
    <p>Since the other type of data fields can be anything, just a word of general advice is to please do not change the already set data types in your forms to something else since it is going to break the data collection stream.</p>
    <p>If for any reason you do change the naming convention, note that that input fileds' data will be condensed into a new database segment and analyzable as such.</p>
    <p>Other than that, make sure your naming convention is quite unique - we could be adding new supported data types, so ours could match and introduce unpredictable results. It's a good rule of thumb to call your custom name field starting e.g. with your complany name:</p>
    <p><b><i>my_awsome_new_company</i></b>_custom_data_other</p>
  </div>
</template>
