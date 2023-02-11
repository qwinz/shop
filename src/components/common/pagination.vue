<template>
    <div class="block">
        <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-size="pageSize"
            layout="prev, pager, next, jumper" :total="total">
        </el-pagination>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    methods: {
        handleCurrentChange(val) {
            // 通知父组件发请求
            this.$bus.$emit('getPageNo', val)
            console.log(`当前页: ${val}`);
        }
    },
    data() {
        return {
            currentPage: 1,
            pageSize: 30
        };
    },
    computed: {
        ...mapState('searchVuex', {
            total: state => state.searchList.total
        })
    },
}
</script>

<style lang="less" scoped>
.block {
    width: 100%;

    .el-pagination {
        width: 40%;
        margin: 0 auto;
    }
}
</style>