<template>
    <el-container style="height: 900px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
                    <el-menu-item-group>
                        <template slot="title">Group 1</template>
                        <el-menu-item index="1-1">Option 1</el-menu-item>
                        <el-menu-item index="1-2">Option 2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group 2">
                        <el-menu-item index="1-3">Option 3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">Option4</template>
                        <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>Navigator Two</template>
                    <el-menu-item-group>
                        <template slot="title">Group 1</template>
                        <el-menu-item index="2-1">Option 1</el-menu-item>
                        <el-menu-item index="2-2">Option 2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group 2">
                        <el-menu-item index="2-3">Option 3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="2-4">
                        <template slot="title">Option 4</template>
                        <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting"></i>Navigator Three</template>
                    <el-menu-item-group>
                        <template slot="title">Group 1</template>
                        <el-menu-item index="3-1">Option 1</el-menu-item>
                        <el-menu-item index="3-2">Option 2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group 2">
                        <el-menu-item index="3-3">Option 3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="3-4">
                        <template slot="title">Option 4</template>
                        <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>View</el-dropdown-item>
                        <el-dropdown-item>Add</el-dropdown-item>
                        <el-dropdown-item>Delete</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>Tom</span>
            </el-header>

            <el-main>
                <el-table
                        ref="singleTable"
                        :data="tableData"
                        highlight-current-row
                        @current-change="handleCurrentDataChange">
                    <el-table-column prop="date" label="Date" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="Name" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="Address">
                    </el-table-column>
                </el-table>
                <edit-drawer :name="currentData.name" :date="currentData.date" :address="currentData.address"></edit-drawer>
            </el-main>
            <el-footer>
                <el-button
                        type="primary"
                        @click="load_data">
                    Load Data
                </el-button>
                <el-button
                        type="secondary"
                        @click="open_edit">
                    Edit Data
                </el-button>
                <el-button
                        type="secondary"
                        @click="clear_data">
                    Clear Data
                </el-button>
                <el-button
                        type="secondary"
                        @click="loadWithTimeoutFullScreen">
                    Set full screen loading
                </el-button>
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
    import user_model from "@/models/user_model";
    import EditDrawer from "./EditDrawer";
    let loadingSubScriber = null;

    export default {
        name: "ElWorklist",
        data() {
            return {
                currentData: new user_model("","",""),
                tableData: Array(0),
                fullscreenLoading: false,
            }
        },
        methods : {
            open_edit() {
                this.$store.dispatch("drawersetting/draw", true);
            },
            handleCurrentDataChange(val) {
                this.currentData = val;
            },
            load_data() {
                this.start_loading();
                this.tableData.length = 0;
                let myNew = () => {
                    return new user_model('Tom', '2016-05-02', 'No. 189, Grove St, Los Angeles');
                };
                this.tableData.push(new myNew());
                this.tableData.push(new myNew());
                this.tableData.push(new myNew());
                //const item = new user_model('Tom', '2016-05-02', 'No. 189, Grove St, Los Angeles');
                this.end_loading();
                this.notify("データ更新", "更新が完了しました。", 3000);
            },
            clear_data() {
                this.start_loading();
                this.tableData = Array(0);
                this.end_loading();
                this.notify("データ更新", "クリアしました。", 3000);
            },
            notify(title, message, duration) {
                //Notification
                this.$notify({
                    title: title,
                    message: message,
                    duration: duration,
                });
            },
            loadWithTimeoutFullScreen() {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                setTimeout(() => {
                    loading.close();
                }, 2000);
            },
            start_loading() {
                loadingSubScriber = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
            },
            end_loading() {
                if (loadingSubScriber) loadingSubScriber.close();
            }
            // openFullScreen() {
            //     this.fullscreenLoading = true;
            //     setTimeout(() => {
            //         this.fullscreenLoading = false;
            //     }, 2000);
            // }
        },
        components : {
            EditDrawer
        }
    };
</script>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>
