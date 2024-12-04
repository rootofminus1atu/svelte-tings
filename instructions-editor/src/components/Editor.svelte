<script lang="ts">
    import { SchemeType, type Instructions } from "./interfaces";
    import SchemeView from "./SchemeView.svelte";

    /*

    custom syntax ideas:

    Obj(
        name: Str(div>p),
        quotes: Lst<Str(li)>(div>ul),
        details: Obj(
            age: Str(div>div>p),
            img: Str(div>div>div>p, SRC)
        )
    )

    {
        name: div>p,
        quotes: div>ul [
            li>ol [
                li
            ]
        ],
        details: {
            age: div>div>p INNER_HTML,
            img: div>div>div>p SRC
        }
    }

    */
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
                    key: "quotes",
                    value: {
                        type: SchemeType.List,
                        path: "div > ul",
                        element_scheme: {
                            type: SchemeType.String,
                            path: "li",
                            mode: "INNER_HTML"
                        }
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

    const exampleScrapedData = {
        name: "Walter",
        quotes: ["Say my name", "I am the one who knocks!"],
        details: {
            age: "51",
            height: "180"
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