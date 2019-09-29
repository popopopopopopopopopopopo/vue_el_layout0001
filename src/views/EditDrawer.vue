<template>
    <el-drawer
            title="item編集モード"
            :visible.sync="localdrawer"
            :direction="direction">
        <el-main>
            <el-form label-position="right" label-width="100px">
                <el-form-item label="Name">
                    <el-input v-model="localname"></el-input>
                </el-form-item>
                <el-form-item label="Date">
                    <el-input v-model="localdate"></el-input>
                </el-form-item>
                <el-form-item label="Address">
                    <el-input v-model="localaddress"></el-input>
                </el-form-item>
            </el-form>
        </el-main>
        <el-footer>
            <el-button
                    type="primary"
                    @click="save">
                Save
            </el-button>
            <el-button
                    type="secondary"
                    @click="cancel">
                Cancel
            </el-button>
        </el-footer>
    </el-drawer>
</template>

<script>
    export default {
        name : "edit-drawer",
        props : {
            name : "",
            date : "",
            address : "",
        },
        computed : {
            localname: {
                get() {
                    return this.name
                },
                set(val) {
                    this.$emit("update:name", val);
                }
            },
            localdate: {
                get() {
                    return this.date
                },
                set(val) {
                    this.$emit("update:date", val);
                }
            },
            localaddress: {
                get() {
                    return this.address
                },
                set(val) {
                    this.$emit("update:address", val);
                }
            },
            localdrawer: {
                get() {
                    return this.$store.state.drawersetting.drawer;
                },
                set(val) {
                    this.$store.dispatch("drawersetting/draw", val);
                }
            },
        },
        data() {
            return {
                direction: 'rtl',
            };
        },
        methods: {
            save(){
                this.$store.dispatch("drawersetting/draw", false);
            },
            cancel() {
                this.$store.dispatch("drawersetting/draw", false);
            }
        }
    };
</script>

<style scoped>

</style>
