import Vue from 'vue'
import VueQuillEditor, { Quill } from 'vue-quill-editor'
// Permite drag and drop  de imagem
import { ImageDrop } from 'quill-image-drop-module'
//Adciona suporte ao resize imagem
import ImageResize from '@appsflare/quill-image-resize-module'
//Adciona suporte a Imojis
import QuillEmoji from 'quill-emoji'

//Tema do Quill
import 'quill/dist/quill.snow.css'
import 'quill-emoji/dist/quill-emoji.css'

Quill.register({
    'modules/imageDrop': ImageDrop,
    'mmodule/imageResize': ImageResize,
    'modules/emoji': QuillEmoji
})

Vue.use(VueQuillEditor)