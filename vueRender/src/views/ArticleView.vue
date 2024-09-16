<script>

import { marked } from 'marked';
import base from '../javascript/base'

export default {
    name: 'articleView',
    props: {
        article: Object,
    },
    data(){
        return {
            articleLines: [],
            htmlText: ''

        }
    },
    mounted(){
        this.parseMarkdown()
    },
    methods:{
        parseMarkdown(){
            let content_lines = this.article.text.split('\n');
            this.articleLines = content_lines.slice(5, content_lines.length)
            this.htmlText = marked.parse(this.articleLines.join('\n'))
        },
        ...base,
    },
    watch:{
        article:{
            deep: true,
            handler(){
                this.parseMarkdown()
            },
            immediatly: true
        }
    }

}

</script>
<template>
<h1>
    {{ article.title }}
</h1>
<p class="date">发布于 {{ dateParsed(Number(article.time)) }} <br>最后更新于 {{ dateParsed(Number(article.last_edit_time)) }}</p>
<div class="markdownRender" v-html="htmlText"></div>
</template>
<style scoped>

.date{
    font-size: 10px;
    color: hsla(0, 0%, 0%, 0.3);
    line-height: 13px;
    font-weight: 400;
}
</style>