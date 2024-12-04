<script lang="ts">
    import { SchemeType, type Instructions } from "./interfaces";
    import SchemeView from "./SchemeView.svelte";

    const initialInstructions: Instructions = {
        url: 'https://website.com',
        scheme: {
            type: SchemeType.Object,
            fields: [
                {
                    key: "name",
                    value: {
                        type: SchemeType.String,
                        path: "div > p",
                        mode: "INNER_HTML"
                    }
                },
                {
                    key: "details",
                    value: {
                        type: SchemeType.Object,
                        fields: [
                            {
                                key: "age",
                                value: {
                                    type: SchemeType.String,
                                    path: "div > ul > li:nth-of-type(1)",
                                    mode: "INNER_HTML"
                                }
                            },
                            {
                                key: "height",
                                value: {
                                    type: SchemeType.String,
                                    path: "div > ul > li:nth-of-type(2)",
                                    mode: "INNER_HTML"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
    
    let instructions = $state(initialInstructions)

</script>


<div class="box">
    <p>url: {instructions.url}</p>
    <p>json:</p>
    <div class="box">
        <SchemeView bind:scheme={instructions.scheme} />
    </div>
</div>

<style>
    .box {
        border: 2px solid blue;
    }
</style>