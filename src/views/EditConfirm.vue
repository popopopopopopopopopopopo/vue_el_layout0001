<template>
    <el-dialog
            :title="title"
            :visible.sync="localvisible"
            width="30%"
            :before-close="handleClose">
        <span>{{ message }}</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="localvisible = false">Cancel</el-button>
    <el-button type="primary" @click="localvisible = false">Confirm</el-button>
  </span>
    </el-dialog>
</template>

<script>
    export default {
        name: "edit-confirm",
        props: {
            title: "",
            message: "",
        },
        computed: {
            localvisible: {
                get() {
                    return this.$store.state.confirmsetting.visible;
                },
                set(val) {
                    this.$store.dispatch("confirmsetting/setvisible", val);
                }
            },
        },
        methods: {
            handleClose() {
                console.log("hoge");
            }
        }
    }
</script>

<style scoped>

</style>
