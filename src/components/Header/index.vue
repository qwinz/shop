<template>
    <div>
        <Topbar/>
        <SiteHeader>
            
        </SiteHeader>
    </div>
</template>

<script>
import Topbar from './Topbar'
import SiteHeader from './Header';
export default {
    name: 'Header',
    components: { Topbar, SiteHeader }
}
</script>

<style scoped>
.allCategory {
    line-height: 6em;
    font-size: 16px;
    cursor: pointer;
}
</style>>
</style>