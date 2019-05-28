<template>
    <div>

        <div class="media">
            <div class="media-left">
                <h3 class="subtitle">1</h3>
            </div>
            <div class="media-content">
                <h3 class="subtitle">Set your variables and custom styling with Sass or CSS</h3>
                <b-message type="is-info">
                    <div class="content">
                        <p>There's also two other variables created by Buefy:</p>
                        <ol>
                            <li><code>$speed-slow: 150ms !default</code></li>
                            <li><code>$speed-slower: 250ms !default</code></li>
                        </ol>
                    </div>
                </b-message>
                <b-message type="is-warning">
                    You might also have to install <code>node-sass</code> and <code>sass-loader</code> depending on your environment.
                </b-message>

            </div>
        </div>

        <div class="media">
            <div class="media-left">
                <h3 class="subtitle">2</h3>
            </div>
            <div class="media-content">
                <h3 class="subtitle">Import and use the ET Form</h3>
                <b-message type="is-warning">
                    Please note that <code class="javascript">import 'buefy/dist/buefy.css'</code> from the <router-link to="/documentation/start">start section</router-link> has been omitted.
                </b-message>
                <CodeView :code="importing | pre" lang="javascript" expanded/>
            </div>
        </div>
    </div>
</template>