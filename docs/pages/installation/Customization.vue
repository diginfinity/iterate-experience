<template>
    <div>

        <h1 class="uk-h1 tm-heading-fragment">Set your variables</h1>
        <h5>and custom styling with Sass or CSS</h5>
        <p>Here are the default values we use:</p>
        <ul>
            <h3>Colors</h3>
            <h5>Main brand colors</h5>
            <li><code>$primary: #34A7DE !default;</code></li>
            <li><code>$secondary: #f27320 !default;</code></li>

            <h3>Color coding fields</h3>
            <h5>Color-coding notification fields for easier overview</h5>
            <li><code>$info: #FCD500 !default;</code></li>
            <li><code>$success: #008c3c !default;</code></li>
            <li><code>$warning: #ffb929 !default;</code></li>
            <li><code>$danger: #f2355b !default;</code></li>

            <h3>Common styles</h3>
            <h5>Commonly used styles in various elements</h5>
            <li><code>$label: #999 !default;</code></li>
            <li><code>$textColor: #333 !default;</code></li>
            <li><code>$backgroundColor: #fff !default;</code></li>
            <li><code>$iconColor: #ccc !default;</code></li>
            <li><code>$borderRadius: 4px !default;</code></li>
            <li><code>$innerShadow: inset 0px 1px 3px rgba(0,0,0,0.125) !default;</code></li>
            <li><code>$shadow: 2px 2px 4px rgba(0,0,0,0.33) !default;</code></li>
        </ul>
        <p>You might also have to install <code>node-sass</code> and <code>sass-loader</code> depending on your environment.</p>
    </div>

</template>

<style scoped>
    h3 {
      margin: 20px 0 10px 0!important;
    }
</style>