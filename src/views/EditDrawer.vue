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
    import { mapState, mapMutations } from 'vuex';
    export default {
        name : "edit-drawer",
        computed : {
            localname: {
                get() {
                    return this.$store.state.current_user.currentuser.name;
                },
                set(val) {
                    this.$store.dispatch("current_user/setname", val);
                }
            },
            localdate: {
                get() {
                    return this.$store.state.current_user.currentuser.date;
                },
                set(val) {
                    this.$store.dispatch("current_user/setdate", val);
                }
            },
            localaddress: {
                get() {
                    return this.$store.state.current_user.currentuser.address;
                },
                set(val) {
                    this.$store.dispatch("current_user/setaddress", val);
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
                this.$store.dispatch("current_user/setuser", false);
                this.$store.dispatch("drawersetting/draw", false);
            },
            cancel() {
                this.$store.dispatch("drawersetting/draw", false);
            },
        }
    };
</script>

<style scoped>

</style>
