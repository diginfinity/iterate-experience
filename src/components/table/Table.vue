<template>
    <div class="uk-table">
        <table>

            <thead>
                <tr>
                    <th v-for="(column, index) in displayColumn" :key = "index">
                        <div>{{ column.label }}</div>
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(row, index) in displayData" :key = "index">
                    <td
                        v-for="(thisRow, index) in row"
                        :key = "index"
                        v-html="thisRow">
                        <!-- {{ thisRow displayed as HTML }} -->
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
    export default {

        name: 'EtTable',

        props: {
            data: {
                type: Array,
                default: () => []
            },
            columns: {
                type: Array,
                default: () => []
            }
        },

        data() {
            return {
                newColumns: [...this.columns],
                newData: this.data
            }
        },

        computed: {
            displayColumn() {
                return this.columns
            },
            displayData() {
                return this.data
            }
        }

    }
</script>
