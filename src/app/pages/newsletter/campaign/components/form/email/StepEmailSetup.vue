<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { EmailEditor } from 'vue-email-editor'
import mockx from './email.json'
import { mock3 as mock } from './email-mock'

@Component({
  components: {
    EmailEditor
  }
})
export default class StepEmailSetup extends Vue {
  protected options: object = {}
  protected minHeight: string = '600px'
  protected locale: string = 'pt-BR'
  protected projectId: number = 0 // replace with your project id
  protected tools: object = {
    // disable image tool
    image: {
      enabled: true
    }
  }

  @Prop({ type: Number }) readonly type!: number

  mounted () {
    this.$nextTick(() => {
      // document.querySelector('.blockbuilder-branding').remove()
    })
  }

  editorLoaded () {
    // Pass the template JSON here
    if (this.type === 2) {
      this.$refs.emailEditor.editor.loadDesign(mockx)
    }

    if (this.type === 3) {
      this.$refs.emailEditor.editor.loadDesign({
        html: mock,
        classic: true
      })
    }
  }

  saveDesign () {
    this.$refs.emailEditor.editor.saveDesign(
      (design) => {
        console.log('saveDesign', design)
      }
    )
  }

  exportHtml () {
    this.$refs.emailEditor.editor.exportHtml(
      (data) => {
        console.log('exportHtml', data)
      }
    )
  }
}
</script>

<template>
  <div class="card">
    <EmailEditor
      style="height: 600px;"
      :min-height="minHeight"
      :project-id="projectId"
      :locale="locale"
      :tools="tools"
      :options="options"
      ref="emailEditor"
      v-on:load="editorLoaded"
    />
  </div>
</template>
