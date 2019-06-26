<template>
    <div class="editor">
        <quill-editor 
            v-model="content" 
            :options="editorOption"
        ></quill-editor>
    </div>    
</template>

<script>
export default {
    name: "Editor",
    data(){
        return{
            content: "",
            editorOption: {}
        }
    },
    methods:{}
    
}
</script>

<style>
.quill-editor, .quill-code{
    width: 100%;
    height: 90vh;
}

</style>


